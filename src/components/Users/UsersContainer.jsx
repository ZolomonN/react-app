import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, changePageThunkCreator, followThunkCreator, unfollowThunkCreator, toggleFollowingProgress } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { getCurrentPage, getFollowingInProgress, 
    getIsAuth, 
    getIsFetching, getPageSize, 
    getTotalItemsCount, getUsers } from '../../redux/usersSelectors';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
        this.props.changePageThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
            totalItemsCount={this.props.totalItemsCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            usersData={this.props.usersData}
            followingInProgress = {this.props.followingInProgress}
            followThunkCreator = {this.props.followThunkCreator}
            unfollowThunkCreator = {this.props.unfollowThunkCreator}
            isAuth = {this.props.isAuth}
        />
        </>
    };
};

/* const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
}; */

const mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    };
};


const UsersContainer = connect(mapStateToProps, 
    {
        toggleFollowingProgress,
        getUsersThunkCreator,
        changePageThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
    })(UsersAPIComponent);

export default UsersContainer;