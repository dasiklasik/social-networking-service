import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../api/api";

type userItemPropsType = {
    userInfo: userItemType
    toggleFollow: (userId: number, isFollowing: boolean) => void
    isAuth: boolean
}

export const UserItem = (props: userItemPropsType) => {

    const {
        userInfo,
        toggleFollow,
        isAuth,
    } = props

    const onFollowHandler = () => {
        usersAPI.followUser(userInfo.id)
            .then((response) => {
                toggleFollow(userInfo.id, true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onUnfollowHandler = () => {
        usersAPI.unFollowUser(userInfo.id)
            .then((response) => {
                debugger
                props.toggleFollow(userInfo.id, false)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div>
            <div className={s.wrapper}>
                <div>
                    <NavLink to={'/profile/' + userInfo.id.toString()}>
                        <img className={s.avatar} src={userInfo.photos.small ? userInfo.photos.small :
                            'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'} alt={''}/>
                    </NavLink>

                    {isAuth && userInfo.followed ?
                        <button onClick={onUnfollowHandler}>Unfollow</button> :
                        isAuth ? <button onClick={onFollowHandler}>Follow</button> : null
                    }

                </div>
                <div className={s.desc}>
                    <div>
                        <div className={s.name}>{userInfo.name}</div>
                        <div className={s.status}>{userInfo.status}</div>
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