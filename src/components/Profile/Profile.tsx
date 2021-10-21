import React from "react";
import nature from '../../nature.jpg';
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <main className={s.main_content}>
            <ProfileInfo firstName='Darya' lastName="Samsonovich" dateOfBirth='11.04.1999' city='Minsk'
            education='univercity' webSite='none'
            />
            <PostsWrapper/>
        </main>
    )
}

