import React from "react";
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../redux/state";
import { PostsWrapperContainer } from "./MyPosts/PostsWrapperContainer";

type profilePropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}

export function Profile(props: profilePropsType) {
    debugger
    return (
        <main className={s.main_content}>
            <ProfileInfo firstName='Darya' lastName="Samsonovich" dateOfBirth='11.04.1999' city='Minsk'
            education='univercity' webSite='none'
            />
            <PostsWrapperContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
        </main>
    )
}


