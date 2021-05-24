import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {
    return (
        <div className = 'dialogs'>
            <div className = 'dialogs-list'>
                {props.dialogsData.map(dialog =>  <DialogItem key={dialog.id} name = {dialog.name} id = {dialog.id}/>)}
            </div>
            <div className = 'messages'>
                <MessagesContainer messagesData = {props.messagesData} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;