import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {UserImage} from "./UserImage/UserImage";

type userItemPropsType = {
    userInfo: userItemType
    isAuth: boolean
    followingInProgress: Array<number>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const UserItem = (props: userItemPropsType) => {

    const {
        userInfo,
        isAuth,
        followingInProgress,
        followUser,
        unfollowUser,
    } = props

    const onFollowHandler = () => {
        followUser(userInfo.id)
    }

    const onUnfollowHandler = () => {

        unfollowUser(userInfo.id)
    }


    return (
        <div>
            <div className={s.wrapper}>
                <div>
                    <UserImage userId={userInfo.id} userSmallFoto={userInfo.photos.small}/>
                    {isAuth && userInfo.followed ?
                        <button disabled={followingInProgress.some(u => u === userInfo.id)}
                                onClick={onUnfollowHandler}>Unfollow</button> :
                        isAuth ? <button disabled={followingInProgress.some(u => u === userInfo.id)}
                                         onClick={onFollowHandler}>Follow</button> : null
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