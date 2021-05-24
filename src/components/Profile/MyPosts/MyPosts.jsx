import React from 'react';
import { reduxForm } from 'redux-form';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const PostReduxForm = reduxForm({ form: 'profileAddPostForm' })(PostForm);



const MyPosts = React.memo(props => {
    const onSubmit = (value) => {
        props.addPost(value.newPostBody)
    };
    return (
        <div className='profile__postsBlock'>
            {props.isOwner && <PostReduxForm onSubmit={onSubmit} />}
            {props.postsData.map(post => <Post key={post.id} profileAvatar={props.profileAvatar} message={post.text} likecounter={post.likes} />)}
        </div>
    )
});

/* shouldComponentUpdate(nextProps, nextState) {
        return this.props != nextProps || this.state != nextState;
    } */ /* PureComponent делает ~ это же. - memo  */ 

export default MyPosts;