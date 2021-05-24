import React from 'react';
import { Field } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { MaxLengthCreator, required } from '../../../../utils/validators/validators'

const maxLength100 = MaxLengthCreator(100);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'newMessageBody'} validate={[required, maxLength100]}
            component={Textarea} placeholder={'Your message'}/></div>
            <div><button>Add message</button></div>
        </form>
    )
};

export default MessageForm;