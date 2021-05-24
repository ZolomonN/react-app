import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

let initialState = {
    usersData: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const follow = (userId) => ({type: 'FOLLOW', userId});
export const unfollow = (userId) => ({type: 'UNFOLLOW', userId});
export const setCurrentPage = (number) => ({type: 'SET_CURRENT_PAGE', number});
export const setTotalItemsCount = (count) => ({type: 'SET_TOTAL_ITEMS_COUNT', count});
export const setUsers = (users) => ({type: 'SET_USERS', users});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});
export const toggleFollowingProgress = (followingProgress, userId) => ({type: 'FOLLOWING_IN_PROGRESS', followingProgress, userId});

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'FOLLOW': 
        return {
            ...state,
            usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: true}),
        };
        case 'UNFOLLOW': 
        return {
            ...state,
            usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: false}),
        };
        case 'SET_USERS':
            return {...state, usersData: [...action.users]};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.number};
        case 'SET_TOTAL_ITEMS_COUNT':
            return {...state, totalItemsCount: action.count};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'FOLLOWING_IN_PROGRESS':
            return {...state, 
                followingInProgress: action.followingProgress 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id != action.userId)};
        default: 
            return state;
    };
};

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    response = response.data;
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalItemsCount(response.totalCount));
};

export const changePageThunkCreator = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let response = await usersAPI.getUsers(pageNumber, pageSize);
    response = response.data;
    dispatch(toggleIsFetching(false)); 
    dispatch(setUsers(response.items));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
    let response = await apiMethod(id);
    response = response.data;
    if (response.resultCode === 0) {
        dispatch(actionCreator(id));
    };
    dispatch(toggleFollowingProgress(false, id));
}

export const followThunkCreator = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow);
}
export const unfollowThunkCreator = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollow);
};

export default usersReducer;
