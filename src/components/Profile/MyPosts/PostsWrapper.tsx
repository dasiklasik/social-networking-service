import React from "react";
import s from './PostsWrapper.module.css'
import {PostFormContainer, postFormType} from "./PostForm/PostForm";
import {postDataType} from "../../../redux/state";
import { Post } from "./Post/Post";

type PostsWrapperPropsType = {
    posts: Array<postDataType>
    addPost: (text: string) => void
}

export const PostsWrapper = React.memo(({addPost, ...props}: PostsWrapperPropsType) => {

    const submit = (data: postFormType) => {
        addPost(data.postText)
    }

    const posts = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <PostFormContainer
                onSubmit={submit}
            />
            {posts}
        </div>
    )
})



