import React from "react";
import s from './PostsWrapper.module.css'
import {Post} from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import {postDataType} from "../../../redux/state";

type PostsWrapperPropsType = {
    postData: Array<postDataType>
}

export function PostsWrapper(props: PostsWrapperPropsType) {


    const postArray = props.postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostForm/>
            {postArray}
        </div>
    )
}

