import React from "react";
import s from "../UserItem.module.css";
import {NavLink} from "react-router-dom";

type UserImagePropsType = {
    userId: number
    userSmallFoto: string | null
}

export const UserImage = ({userId, userSmallFoto, ...props}: UserImagePropsType) => {
    return (
        <NavLink to={'/profile/' + userId.toString()}>
            <img className={s.avatar} src={userSmallFoto ? userSmallFoto :
                'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'} alt={''}/>
        </NavLink>
    )
}