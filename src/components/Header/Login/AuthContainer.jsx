import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {logoutThunkCreator} from '../../../redux/authReducer';

class AuthAPIComponent extends React.Component {
    render() {
        return <Auth {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};



const AuthContainer = connect(mapStateToProps, { logoutThunkCreator})(AuthAPIComponent);

export default AuthContainer;