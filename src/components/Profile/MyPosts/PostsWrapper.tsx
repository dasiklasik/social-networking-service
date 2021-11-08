import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import {postDataType} from "../../../redux/state";

type PostsWrapperPropsType = {
    postData: Array<postDataType>
    addPost: (postMessage: string) => void
    typedMessage: string
    changeTypedMessage: (message: string) => void
}

export function PostsWrapper({postData, addPost, ...props}: PostsWrapperPropsType) {


    const postArray = postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm addPost={addPost} typedMessage={props.typedMessage} changeTypedMessage={props.changeTypedMessage}/>
            {postArray}
        </div>
    )
}

