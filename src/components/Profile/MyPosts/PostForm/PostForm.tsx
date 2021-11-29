import React from "react";
import s from './../PostsWrapper.module.css'
import {actionType} from "../../../../redux/state";
import { addPostActionCreator, changeTypedMessageActionCreator } from "../../../../redux/profileReducer";

type postFormPropsType = {
    dispatch: (action: actionType) => void
    newPostText: string
    // store: storeType
}

function PostForm({dispatch, newPostText, ...props}: postFormPropsType) {

    const newPostRef = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {

        dispatch(addPostActionCreator())


    }

    return (
        <div className={s.post_form}>
            <textarea value={newPostText} ref={newPostRef}
                      onChange={(e) => {
                          dispatch(changeTypedMessageActionCreator(e.currentTarget.value))}
                      }>

            </textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

