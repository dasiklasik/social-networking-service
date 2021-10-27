import React from "react";
import nature from '../../nature.jpg';
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../index";

type profilePropsType = {
    postData: Array<postDataType>
}

export function Profile(props: profilePropsType) {
    return (
        <main className={s.main_content}>
            <ProfileInfo firstName='Darya' lastName="Samsonovich" dateOfBirth='11.04.1999' city='Minsk'
            education='univercity' webSite='none'
            />
            <PostsWrapper postData={props.postData}/>
        </main>
    )
}


