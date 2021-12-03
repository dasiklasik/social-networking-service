import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import {actionType, postDataType, profilePageType, store, storeType} from "../../../redux/state";

type PostsWrapperPropsType = {
    // profilePage: profilePageType
    // dispatch: (action: actionType) => void
    posts: any
    addPost: () => void
    changeTypedMessage: (text: string) => void
    newPostText: string
}

export function PostsWrapper(props: PostsWrapperPropsType) {




    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm addPost={props.addPost} newPostText={props.newPostText} changeTypedMessage={props.changeTypedMessage}/>
            {props.posts}
        </div>
    )
}

