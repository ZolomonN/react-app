import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm/LoginForm';
import { loginThunkCreator } from '../../redux/authReducer'
import { Redirect } from 'react-router';

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({loginThunkCreator, isAuth, captchaUrl}) => {
    const onSubmit = ({email, password, rememberMe, captcha}) => {
        loginThunkCreator(email,password, rememberMe, captcha)
    }
    if (isAuth) return <Redirect to={'/profile'}/>
    return <div className='loginPage'>
        <h1>Login</h1>
        <LoginReduxForm  onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth   
    };
};

const APILogin = connect(mapStateToProps, {loginThunkCreator})(Login);



export default APILogin;