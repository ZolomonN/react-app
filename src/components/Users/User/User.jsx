import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/smallProfilePhoto.png'
import FollowUnfollowBtn from './FollowUnfollowBtn/FollowUnfollowBtn';

const User = (props) => {
    return (
        <div className='user'>
            <NavLink to={`/profile/${props.id}`}>
                <img className = 'user__photo'
                src = {props.photos.small != null ? props.photos.small : userPhoto}/>
            </NavLink>
            <div><b>FullName:</b> {props.name}</div>
            <div><b>Status:</b> {props.status}</div>
            {props.isAuth && <FollowUnfollowBtn id={props.id}
            followed = {props.followed} 
            followingInProgress = {props.followingInProgress}
            unfollowThunkCreator = {props.unfollowThunkCreator}
            followThunkCreator = {props.followThunkCreator}/>}
        </div>
    )
};

export default User;