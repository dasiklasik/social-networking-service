import React from "react";
import s from './Profile.module.css'
import {PostsWrapperContainer} from "./MyPosts/PostsWrapperContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileInfoType} from "../../redux/state";

type ProfilePropsType = {
    profile: profileInfoType
    status: string
    setProfileStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    const {
        profile,
        status,
        setProfileStatus,
    } = props

    return (
        <main className={s.main_content}>
            <ProfileInfo
                profileInfoData={profile}
                setProfileStatus={setProfileStatus}
                status={status}
            />
            <PostsWrapperContainer/>
        </main>
    )
}


