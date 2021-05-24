import React from 'react';

const Friend = (props) => {
    return (
        <div className = 'friend'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
            <div>
                <span>{`${props.name}, ${props.year}`}</span>
            </div>
        </div>
    );
};

export default Friend;