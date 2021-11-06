import React from "react";
import s from './../PostsWrapper.module.css'


function PostForm() {

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        debugger
        alert(newPostRef.current?.value)
    }

    return (
        <div className={s.post_form}>
            <textarea ref={newPostRef}>your news</textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

