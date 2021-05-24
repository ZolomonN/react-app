import React from 'react';
import { reduxForm } from 'redux-form';
import MessageForm from './MessageForm/MessageForm'
import Messages from './Messages';

const MessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(MessageForm);

const MessagesContainer = (props) => {

    const onSubmit = (value) => {
        props.addMessage(value.newMessageBody)
    }
    return ( 
        <div>
            {props.messagesData.map(message => <Messages key={message.id} message = {message.text}/>)}
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default MessagesContainer;