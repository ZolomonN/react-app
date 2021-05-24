import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from "./User/User";


const Users = (props) => {  
    return <div className='users'>
        <Pagination 
         totalItemsCount = {props.totalItemsCount}
         pageSize = {props.pageSize}
         onPageChange = {props.onPageChange}
         currentPage = {props.currentPage}
        />
        {props.usersData.map(users => <User
            key={users.id}
            id={users.id}
            name={users.name}
            status={users.status}
            location={users.location}
            photos = {users.photos}
            followed={users.followed}
            followingInProgress = {props.followingInProgress}
            followThunkCreator = {props.followThunkCreator}
            unfollowThunkCreator = {props.unfollowThunkCreator}
            isAuth = {props.isAuth}
        />)}
    </div>
};

export default Users;