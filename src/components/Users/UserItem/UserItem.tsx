import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/usersReducer";
import { NavLink } from "react-router-dom";

type userItemPropsType = {
    userInfo: userItemType
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const UserItem = (props: userItemPropsType) => {

    const onFollowHandler = () => {
        props.followUser(props.userInfo.id)
    }

    const onUnfollowHandler = () => {
      props.unfollowUser(props.userInfo.id)
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div>
                    <NavLink to={'profile/'+props.userInfo.id.toString()}>
                        <img className={s.avatar} src={props.userInfo.photos.small ? props.userInfo.photos.small :
                            'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'} alt={''}/>
                    </NavLink>
                    {props.userInfo.followed ? <button onClick={onUnfollowHandler}>Unfollow</button> :
                        <button onClick={onFollowHandler}>Follow</button>}
                </div>
                <div className={s.desc}>
                    <div>
                        <div className={s.name}>{props.userInfo.name}</div>
                        <div className={s.status}>{props.userInfo.status}</div>
                    </div>
                    <div className={s.living}>
                        {/*<p>{"props.userInfo.location.country"}</p>*/}
                        {/*<p>{"props.userInfo.location.city"}</p>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}