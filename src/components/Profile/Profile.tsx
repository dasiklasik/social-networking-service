import React from "react";
import s from './Profile.module.css'
import { PostsWrapperContainer } from "./MyPosts/PostsWrapperContainer";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";


export function Profile() {
    return (
        <main className={s.main_content}>
            <ProfileInfoContainer />
            <PostsWrapperContainer/>
        </main>
    )
}


