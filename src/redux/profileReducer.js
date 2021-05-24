import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

let initialState = {
    postsData: [
        {id: '1', text: 'Hi, its me - Mario!', likes: '3'},
        {id: '2', text: 'My first post', likes: '10'},
        {id: '3', text: 'My second post', likes: '41'},
        {id: '4', text: 'My third post', likes: '23'},
    ],
    profile: null,
    status: null,
};

export const addPost = (newPostBody) => ({type: 'ADD_POST', newPostBody});
export const deletePost = (postId) => ({type: 'DELETE_POST', postId});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setStatus = (status) => ({type: 'SET_STATUS', status});
export const savePhotoSuccess = (photos) => ({type: 'SAVE_PHOTO_SUCCESS', photos});

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: '5',
                text: action.newPostBody,
                likes: '0'
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case 'DELETE_POST': {
            return {...state, 
                postsData: state.postsData.filter(post => post.id != action.postId)}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default: 
            return state;
    };
};

export const getProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    };
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    };
};
export const saveProfileThunkCreator = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profileData);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId));
    } else {
        dispatch(stopSubmit('profileData', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    };
};

export default profileReducer;
