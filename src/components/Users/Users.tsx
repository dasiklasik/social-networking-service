import {userItemType} from "../../redux/reducers/users-reducer";
import {UserItem} from "./UserItem/UserItem";
import React from "react";
import {Paginator} from "./Paginator/Paginator";

type UsersPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userItemType>
    isAuth: boolean
    followingInProgress: Array<number>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}
export const Users = (props: UsersPropsType) => {

    const {
        currentPage,
        onPageChanged,
        users,
        pageSize,
        totalUsersCount,
        isAuth,
        followingInProgress,
        followUser,
        unfollowUser,
    } = props

    return (
        <div>
            <h2>Users</h2>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
            {users.map(t => <UserItem userInfo={t}
                                      isAuth={isAuth}
                                      followingInProgress={followingInProgress}
                                      followUser={followUser}
                                      unfollowUser={unfollowUser}

            />)}
        </div>
    )
}