import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className = {`dialogs-list__item active`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
            <NavLink to = {'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;