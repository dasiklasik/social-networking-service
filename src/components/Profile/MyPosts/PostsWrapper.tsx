import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";

export function PostsWrapper() {
    const postData = [
        {id: 1, message: 'Message', likesCount: '0' },
        {id: 2, message: 'Message 2', likesCount: '2' },
    ]

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm/>
            <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
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

