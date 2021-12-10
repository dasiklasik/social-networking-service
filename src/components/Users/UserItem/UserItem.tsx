import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/state";
import {addFriendAC} from "../../../redux/navbarReducer";

type userItemPropsType = {
    userInfo: userItemType
    addFriend: (friendInfo: userItemType) => void
    test: () => void
}

export const UserItem = (props: userItemPropsType) => {

    const onClickHandler = () => {
        debugger
        props.addFriend(props.userInfo)
    }

    return (
        <li>
            <div className={s.wrapper}>
                <div>
                    <img className={s.avatar} src={props.userInfo.avatar} alt={''}/>
                    <button onClick={onClickHandler}>Follow</button>
                </div>
                <div className={s.desc}>
                    <div>
                        <div className={s.name}>{props.userInfo.name}</div>
                        <div className={s.status}>{props.userInfo.status}</div>
                    </div>
                    <div className={s.living}>
                        <p>{props.userInfo.country}</p>
                        <p>{props.userInfo.city}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}