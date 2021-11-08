import React from "react";
import s from './../PostsWrapper.module.css'

type postFormPropsType = {
    addPost: (postMessage: string) => void
    typedMessage: string
    changeTypedMessage: (message: string) => void
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
            <textarea value={props.typedMessage} ref={newPostRef}
                      onChange={(e) => {
                          debugger
                          props.changeTypedMessage(e.currentTarget.value)}
                      }>

            </textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}

export default PostForm;

