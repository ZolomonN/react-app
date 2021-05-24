import React from 'react';
import Friend from './friendFromList/Friend';

const Sidebar = (props) => {
    return (
        <div className = 'sidebar'>
            <div className = 'friendsList'>
                {props.friendsList.map(friend => <Friend key={friend.id} name = {friend.name} year = {friend.year} />)}
            </div>
        </div>
    )
};

export default Sidebar;