import React from 'react';
import userPhoto from '../../../img/smallProfilePhoto.png'

const Post = (props) => {
    return (
        <div className = {`profile__post post`}>
            <div>
                <img className = 'post__img' src={props.profileAvatar !== null 
                    ? props.profileAvatar 
                    : userPhoto} alt=""/>
            </div>
            <div>
                <span>{props.message}</span>
            </div>
            <div>
                <span>Like: {props.likecounter}</span>
            </div>
        </div>
    )
}

export default Post;