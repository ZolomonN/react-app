import React from 'react';
import { Field } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} component={Input} validate={[required]} placeholder={'email'}/></div>
            <div><Field name={'password'} component={Input} type={'password'} validate={[required]} placeholder={'Password'}/></div>
            <div><Field name={'rememberMe'} component={Input} type={'checkbox'}/>Remember me</div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <div><Field name={'captcha'} component={Input} validate={[required]} placeholder={'Captcha'}/></div>}
            <div><button>Login</button></div>
           { props.error && <span className='commonError'>{props.error}</span>}
        </form>
    )
};

export default LoginForm;