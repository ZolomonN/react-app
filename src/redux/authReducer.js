import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS',
    captchaUrl
});

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_AUTH_USER_DATA': 
        return {
            ...state,
            ...action.payload,
        };
        case 'GET_CAPTCHA_URL_SUCCESS': 
        return {
            ...state,
            captchaUrl: action.captchaUrl
        };
        default: 
            return state;
    };
};

export const authThunkCreator = () => async (dispatch) => {
   let response = await authAPI.me();
   response = response.data;
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    };
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    response = response.data;
    if (response.resultCode === 0) {
        dispatch(authThunkCreator());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    };
}
export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout();
    response = response.data;
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    };
}

export default authReducer;
