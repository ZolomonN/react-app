import React from 'react';

const FollowUnfollowBtn = (props) => {
    return <div>
        {props.followed
        ? <button className='user__subscribeBtn btnReset' disabled = {props.followingInProgress.some(id => id === props.id)} 
            onClick={() => {props.unfollowThunkCreator(props.id)}}>unfollow</button>
        : <button className='user__subscribeBtn btnReset' disabled = {props.followingInProgress.some(id => id === props.id)} 
            onClick={() => {props.followThunkCreator(props.id)}}>follow</button>}
    </div>
};

export default FollowUnfollowBtn;