import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";

export function PostsWrapper() {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm/>
            <Post message={'Message'}/>
            <Post message={'Message 2'}/>
        </div>
    )
}

function PostForm() {
    return (
        <div className={s.post_form}>
            <textarea>your news</textarea>
            <button>Send</button>
        </div>
    )
}

