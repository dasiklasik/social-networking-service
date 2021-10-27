import React from "react";
import s from './../PostsWrapper.module.css'


function PostForm() {
    return (
        <div className={s.post_form}>
            <textarea>your news</textarea>
            <button>Send</button>
        </div>
    )
}

export default PostForm;

