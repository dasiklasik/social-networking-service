import React from "react";
import s from './PostsWrapper.module.css'
import {PostFormContainer, postFormType} from "./PostForm/PostForm";

type PostsWrapperPropsType = {
    posts: JSX.Element[]
    addPost: (text: string) => void
}



export function PostsWrapper(props: PostsWrapperPropsType) {

    const {addPost} = props

    const submit = (data: postFormType) => {
        addPost(data.postText)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostFormContainer
                onSubmit={submit}
            />
            {props.posts}
        </div>
    )
}



