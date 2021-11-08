import React from "react";
import s from './../PostsWrapper.module.css'

type postFormPropsType = {
    addPost: (postMessage: string) => void
}

function PostForm({addPost, ...props}: postFormPropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        if (newPostRef.current) {
            addPost(newPostRef.current?.value)
            newPostRef.current.value = ''
        }

    }

    return (
        <div className={s.post_form}>
            <textarea ref={newPostRef}></textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

