import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

type userItemPropsType = {
    userInfo: userItemType
    toggleFollow: (userId: number, isFollowing: boolean) => void
    isAuth: boolean
    setFollowingInProgress: (userId: number, isAdding: boolean) => void
    followingInProgress: Array<number>
}

export const UserItem = (props: userItemPropsType) => {

    const {
        userInfo,
        toggleFollow,
        isAuth,
        setFollowingInProgress,
        followingInProgress,
    } = props

    const onFollowHandler = () => {
        setFollowingInProgress(userInfo.id, true)
        usersAPI.followUser(userInfo.id)
            .then((response) => {
                toggleFollow(userInfo.id, true)
                setFollowingInProgress(userInfo.id, false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onUnfollowHandler = () => {
        setFollowingInProgress(userInfo.id, true)
        usersAPI.unFollowUser(userInfo.id)
            .then((response) => {
                setFollowingInProgress(userInfo.id, false)
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
                        <button disabled={followingInProgress.some(u => u === userInfo.id)} onClick={onUnfollowHandler}>Unfollow</button> :
                        isAuth ? <button disabled={followingInProgress.some(u => u === userInfo.id)} onClick={onFollowHandler}>Follow</button> : null
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