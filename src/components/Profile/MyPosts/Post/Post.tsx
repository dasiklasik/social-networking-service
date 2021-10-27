import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string
    likesCount: string
}



export function Post(props: PostPropsType) {

    return (
        <div className={s.item}>
            <img src={'https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg'}/>
            <div>{props.message}</div>
            <div>{props.likesCount} likes</div>
            <div><span>like</span><span> displike</span></div>

        </div>

    )
}