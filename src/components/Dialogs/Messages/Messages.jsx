import React from 'react';

const Messages = (props) => {
    return <div>
        <div className="messages__item">{props.message}</div>
    </div>
};

export default Messages;