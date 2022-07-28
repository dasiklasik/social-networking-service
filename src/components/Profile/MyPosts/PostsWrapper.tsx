import React from "react";
import s from './PostsWrapper.module.css'
import {PostFormContainer, postFormType} from "./PostForm/PostForm";
import {on} from "cluster";

type PostsWrapperPropsType = {
    posts: any
    addPost: () => void
    changeTypedMessage: (text: string) => void
    newPostText: string
}



export function PostsWrapper(props: PostsWrapperPropsType) {

    const onSubmit = (data: postFormType) => {
        console.log(data)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostFormContainer
                addPost={props.addPost}
            newPostText={props.newPostText}
            changeTypedMessage={props.changeTypedMessage}
                onSubmit={onSubmit}
            />
            {props.posts}
        </div>
    )
}



