import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import {actionType, profilePageType, store, storeType} from "../../../redux/state";

type PostsWrapperPropsType = {
    state: profilePageType
    dispatch: (action: actionType) => void
}

export function PostsWrapper(props: PostsWrapperPropsType) {


    const postArray = store._state.profilePage.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            {postArray}
        </div>
    )
}

