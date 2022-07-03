import {userItemType} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {UserItem} from "./UserItem/UserItem";
import React from "react";
import {BrowserRouter} from "react-router-dom";

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


    if (currentPage >= pagesCount - 5) {
        for (let i = currentPage; i <= pagesCount; i++) {
            pages.push(i)
        }

    } else if (pagesCount > 5) {
       if (currentPage === 1) {
           let initialNum = currentPage
           for (let i = initialNum; i <= initialNum + 5; i++) {
               pages.push(i)
           }
       } else {
           let initialNum = currentPage
           for (let i = initialNum-1; i <= initialNum + 5; i++) {
               pages.push(i)
           }
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
                {currentPage !== 1 && pagesCount > 5 ? <>
                    <span className={currentPage === 1 ? s.selected : ''}
                          onClick={() => onPageChanged(1)}
                    >1</span> <span>... </span></> : ''}
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
                    pagesCount > 5 && currentPage < pagesCount - 5 ? <>
                        <span>...</span><span onClick={() => onPageChanged(pagesCount)}> {pagesCount}</span>

                    </> : ''
                }
            </div>
            {users.map(t => <UserItem userInfo={t}
                                      followUser={followUser}
                                      unfollowUser={unfollowUser}/>)}
        </div>
    )
}