import {userItemType} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {UserItem} from "./UserItem/UserItem";
import React from "react";

type UsersPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userItemType>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}
export const Users = (props: UsersPropsType) => {

    const {
        currentPage,
        onPageChanged,
        users,
        followUser,
        unfollowUser,
        pageSize,
        totalUsersCount,
    } = props


    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []


    if (pagesCount > 5) {
        let initialNum = currentPage
        for (let i = initialNum; i <= initialNum + 5; i++) {
            pages.push(i.toString())
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return (
        <div>
            <h2>Users</h2>
            <div>
                {currentPage !== 1 && pagesCount > 5 ? <span>... </span> : ''}
                {
                    pages.map(i => {

                        return (
                            <span
                                className={
                                    currentPage === +i ? s.selected : ''
                                }
                                onClick={() => onPageChanged(+i)}
                            >{i} </span>
                        )
                    })
                }
                {
                    pagesCount > 5 ? <span>...</span> : ''
                }
            </div>
            {users.map(t => <UserItem userInfo={t}
                                      followUser={followUser}
                                      unfollowUser={unfollowUser}/>)}
        </div>
    )
}