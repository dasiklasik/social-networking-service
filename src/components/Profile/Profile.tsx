import React from "react";
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../redux/state";

type profilePropsType = {
    state: profilePageType
    dispatch: (action: actionType) => void
}

export function Profile(props: profilePropsType) {
    return (
        <main className={s.main_content}>
            <ProfileInfo firstName='Darya' lastName="Samsonovich" dateOfBirth='11.04.1999' city='Minsk'
            education='univercity' webSite='none'
            />
            <PostsWrapper state={props.state} dispatch={props.dispatch}/>
        </main>
    )
}


