import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/usersReducer";

type userItemPropsType = {
    userInfo: userItemType
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

export const UserItem = (props: userItemPropsType) => {

    const onFollowHandler = () => {
        props.followUser(props.userInfo.id)
    }

    const onUnfollowHandler = () => {
      props.unfollowUser(props.userInfo.id)
    }

    return (
        <li>
            <div className={s.wrapper}>
                <div>
                    <img className={s.avatar} src={'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'} alt={''}/>
                    {props.userInfo.followed ? <button onClick={onUnfollowHandler}>Unfollow</button> :
                         <button onClick={onFollowHandler}>Follow</button>}
                </div>
                <div className={s.desc}>
                    <div>
                        <div className={s.name}>{props.userInfo.fullName}</div>
                        <div className={s.status}>{props.userInfo.status}</div>
                    </div>
                    <div className={s.living}>
                        <p>{props.userInfo.location.country}</p>
                        <p>{props.userInfo.location.city}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}