import React from "react";
import s from './Profile.module.css'
import { PostsWrapperContainer } from "./MyPosts/PostsWrapperContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileInfoType} from "../../redux/state";

type ProfilePropsType = {
    profile: profileInfoType;
}

export function Profile(props: ProfilePropsType) {

    const {profile} = props


    return (
        <main className={s.main_content}>
            <ProfileInfo profileInfoData={profile}/>
            <PostsWrapperContainer/>
        </main>
    )
}


