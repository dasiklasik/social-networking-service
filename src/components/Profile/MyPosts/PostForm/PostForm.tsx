import React from "react";
import s from './../PostsWrapper.module.css'
import {storeType} from "../../../../redux/state";

type postFormPropsType = {
    addPost: () => void
    changeTypedMessage: (message: string) => void
    newPostText: string
    // store: storeType
}

function PostForm({addPost, changeTypedMessage, newPostText, ...props}: postFormPropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        if (newPostRef.current) {
            addPost()
        }

    }

    return (
        <div className={s.post_form}>
            <textarea value={newPostText} ref={newPostRef}
                      onChange={(e) => {
                          changeTypedMessage(e.currentTarget.value)}
                      }>

            </textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

