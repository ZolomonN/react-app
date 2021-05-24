import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';




const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        messageValue: state.messagePage.newMessageText,    
    };
};


export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);