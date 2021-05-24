import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
}
  return (
    <main className="profile">
      <ProfileInfo profile = {props.profile}
       status = {props.status} 
       updateStatus = {props.updateStatus}
       isOwner = {props.isOwner}
       savePhoto = {props.savePhoto}
       saveProfile = {props.saveProfile}/>
      <MyPosts 
      isOwner = {props.isOwner}
      profileAvatar = {props.profile.photos.large}
      postsData = {props.postsData}
      postValue = {props.postValue}
      addPost = {props.addPost}
      newPostValue = {props.newPostValue}/>
    </main>
  );
};

export default Profile;