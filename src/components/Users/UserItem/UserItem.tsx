import React from "react";
import s from './UserItem.module.css'
import {userItemType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type userItemPropsType = {
    userInfo: userItemType
    toggleFollow: (userId: number, isFollowing: boolean) => void
    isAuth: boolean
}

export const UserItem = (props: userItemPropsType) => {

    const onFollowHandler = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userInfo.id}`,
            {},
            {withCredentials: true, headers: {'API-KEY': '2fb059af-d1d5-4375-a272-54a52b66ff13'}})
            .then((response) => {
                console.log(response.data)
                props.toggleFollow(props.userInfo.id, response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onUnfollowHandler = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userInfo.id}`,
            {withCredentials: true, headers: {'API-KEY': '2fb059af-d1d5-4375-a272-54a52b66ff13'}})
            .then((response) => {
                props.toggleFollow(props.userInfo.id, response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div>
            <div className={s.wrapper}>
                <div>
                    <NavLink to={'/profile/' + props.userInfo.id.toString()}>
                        <img className={s.avatar} src={props.userInfo.photos.small ? props.userInfo.photos.small :
                            'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'} alt={''}/>
                    </NavLink>

                    {props.isAuth && props.userInfo.followed ?
                        <button onClick={onUnfollowHandler}>Unfollow</button> :
                        props.isAuth ? <button onClick={onFollowHandler}>Follow</button> : null
                    }

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