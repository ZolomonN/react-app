import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button>Save</button>
        <div>
            <div><b>Full name:</b><Field name={'fullName'} component={Input} validate={[]} placeholder={'Full name'} /></div>
        </div>
        <div>
            <div><b>looking For A Job</b>:<Field name={'lookingForAJob'} component={Input} type={'checkbox'} validate={[]} /></div>
            <div><b>My professional skills:</b><Field name={'lookingForAJobDescription'} component={Textarea} validate={[]} placeholder={'My professional skills'} /></div>
            <div><b>About me:</b><Field name={'aboutMe'} component={Textarea} validate={[]} placeholder={'about me'} /></div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(title => {
                return <div><b>{title}:</b><Field name={'contacts.' + title} component={Input} validate={[]} placeholder={title} /></div>})}
            </div>
            { props.error && <span className='commonError'>{props.error}</span>}
        </div>
    </form>
};

const ProfileDataReduxForm = reduxForm({
    form: 'profileData'
})(ProfileDataForm);

export default ProfileDataReduxForm;