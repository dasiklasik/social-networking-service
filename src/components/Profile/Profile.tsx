import React from "react";
import s from './Profile.module.css'
import {PostsWrapper} from "./MyPosts/PostsWrapper";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, storeType} from "../../redux/state";

type profilePropsType = {
    // store: storeType
    state: profilePageType
    addPost: () => void
    changeTypedMessage: (message: string) => void
}

export function Profile(props: profilePropsType) {
    return (
        <main className={s.main_content}>
            <ProfileInfo firstName='Darya' lastName="Samsonovich" dateOfBirth='11.04.1999' city='Minsk'
            education='univercity' webSite='none'
            />
            <PostsWrapper state={props.state} changeTypedMessage={props.changeTypedMessage} addPost={props.addPost}/>
        </main>
    )
}


