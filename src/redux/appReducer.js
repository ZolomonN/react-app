import { authThunkCreator } from "./authReducer";

let initialState = {
    initialized: false
};
const initializedSucces = () => ({type: 'SET_INITIALIZED'});

const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_INITIALIZED': 
        return {
            ...state,
            initialized: true
        };
        default: 
            return state;
    };
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authThunkCreator());
    promise.then(() => {
        dispatch(initializedSucces());
    });
};


export default appReducer;
