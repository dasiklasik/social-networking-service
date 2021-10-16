import React from "react";
import nature from '../../nature.jpg';
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";

export function Profile() {
    return (
        <main className={s.main_content}>
            <img src={nature} className={s.general_image}/>
            <ProfileInfo/>
            <PostsWrapper/>
        </main>
    )
}

function ProfileInfo() {
    return (
        <div className={s.profile}>
            <img src={''} className={s.avatar}/>
            <div className={s.profile_info}>
                <div>some name</div>
                <div>Date of birth: 11.04.1999</div>
                <div>City: Minsk</div>
                <div>Education</div>
                <div>Web Site</div>
            </div>
        </div>
    )
}


