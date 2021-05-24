import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPost, getProfileThunkCreator,
   getStatusThunkCreator, updateStatusThunkCreator, 
   savePhotoThunkCreator, saveProfileThunkCreator } from '../../redux/profileReducer';

import Profile from './Profile';


class ProfileAPIComponent extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = this.props.userId;
    };
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId)
    this.refreshProfile();
  }
  
  render() {
    return <Profile 
    {...this.props} 
    isOwner = {!this.props.match.params.userId}
    profile = {this.props.profile} 
    updateStatus = {this.props.updateStatusThunkCreator}
    savePhoto = {this.props.savePhotoThunkCreator}
    saveProfile = {this.props.saveProfileThunkCreator}/>
  }


}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    postsData: state.profilePage.postsData,
    postValue: state.profilePage.newPostText,
    status: state.profilePage.status,
    userId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {addPost, getProfileThunkCreator,
     getStatusThunkCreator, updateStatusThunkCreator,
     savePhotoThunkCreator, saveProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileAPIComponent);