import React from "react";
import {UserItem} from "./UserItem/UserItem";
import {userItemType} from "../../redux/usersReducer";
import axios from "axios";

type usersPropsType = {
    users: Array<userItemType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: Array<userItemType>) => void
}

export const Users = (props: usersPropsType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })

    }
    return (
        <div>
            <h2>Users</h2>
            {props.users.map(t => <UserItem userInfo={t}
                                            followUser={props.followUser}
                                            unfollowUser={props.unfollowUser}/>)}
        </div>
    )
}