import React, {ChangeEvent} from "react";
import s from './../PostsWrapper.module.css'
import {actionType} from "../../../../redux/state";
import { addPostActionCreator, changeTypedMessageActionCreator } from "../../../../redux/profileReducer";

type postFormPropsType = {
    addPost: () => void
    newPostText: string
    changeTypedMessage: (text: string) => void
}

function PostForm({addPost, newPostText, ...props}: postFormPropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        addPost()
    }

    const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTypedMessage(e.currentTarget.value)
    }

    return (
        <div className={s.post_form}>
            <textarea value={newPostText} ref={newPostRef}
                      onChange={onTextChange}>

            </textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

