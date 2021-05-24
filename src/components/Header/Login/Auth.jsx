import React from 'react';
import { NavLink } from 'react-router-dom';

const Auth = (props) => {
    const logout = props.logoutThunkCreator;
    return <div className='header__loginBlock loginBlock'>
        {props.isAuth 
        ? <div className='loginBlock__content'>
            <div className='loginBlock__auth'>Привет, {props.login}!</div>
            <button className='loginBlock__logout btnReset' onClick={logout}>Выйти</button>
        </div>
        : <NavLink className='loginBlock__login' to='/login'>Авторизация</NavLink>}
    </div>
};

export default Auth;