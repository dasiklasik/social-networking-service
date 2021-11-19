import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import {profilePageType, store, storeType} from "../../../redux/state";

type PostsWrapperPropsType = {
    // store: storeType
    state: profilePageType
    addPost: () => void
    changeTypedMessage: (message: string) => void
}

export function PostsWrapper(props: PostsWrapperPropsType) {


    const postArray = store._state.profilePage.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm addPost={props.addPost} changeTypedMessage={props.changeTypedMessage} newPostText={props.state.newPostText}/>
            {postArray}
        </div>
    )
}

