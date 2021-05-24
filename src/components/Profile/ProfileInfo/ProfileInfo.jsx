import React, { useState } from 'react';

import userPhoto from '../../img/smallProfilePhoto.png'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }
    return (
        <div>
            <div>
                <div>
                <img className="profile__img" src={props.profile.photos.large !== null 
                    ? props.profile.photos.large 
                    : userPhoto} />   
                </div>
                {props.isOwner && <input className='profile__imgUpload' type={'file'} onChange={(e) => {
                    if (e.target.files.length) {
                        props.savePhoto(e.target.files[0])
                    }
                }} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                {editMode 
                ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues ={props.profile} profile = {props.profile}/>
                : <ProfileData profile ={props.profile} isOwner={props.isOwner} setEditMode = {setEditMode}/> }
            </div>
        </div>
    )
};

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <button onClick={() => {
            props.setEditMode(true)
        }}>Edit</button>}
        <div>
            <span><b>Full name:</b>{props.profile.fullName}</span>
        </div>
        <div>
            <b>looking For A Job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
            {props.profile.lookingForAJob && <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>}
            <div><b>About me:</b> {props.profile.aboutMe}</div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(title => {
                return <Contact contactTitle={title} contantValue={props.profile.contacts[title]} />
            })}</div>
        </div>
    </div>
}


export const Contact = ({ contactTitle, contantValue }) => {
    return <div>
        <b>{contactTitle}:</b>{contantValue}
    </div>
};

export default ProfileInfo;