import React from 'react';
import { Field } from 'redux-form';
import { MaxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = MaxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form className='profile__postForm' onSubmit={props.handleSubmit}>
            <div><Field name={'newPostBody'} component={Textarea} placeholder={'Your post'}
            validate={[required, maxLength10 ]}/></div>
            <div><button>Add post</button></div>
        </form>
    )
};

export default PostForm;


