import React from "react";
import {userItemType} from "../../redux/state";
import {UserItem} from "./UserItem/UserItem";

type usersPropsType = {
    usersData: Array<userItemType>
    addFriend: (friendInfo: userItemType) => void
    test: () => void
}

export const Users = (props: usersPropsType) => {
    const usersArray = props.usersData.map(t => <UserItem userInfo={t} addFriend={props.addFriend} test={props.test} />)
    return (
        <div>
            <h2>Users</h2>
            {usersArray}
        </div>
    )
}