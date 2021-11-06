import React from "react";
import s from './MessageForm.module.css'

export const MessageForm = () => {

    const newMessageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        alert(newMessageRef.current?.value)
    }

    return (
        <div className={s.message_form}>
            <textarea ref={newMessageRef}></textarea>
            <button onClick={addMessage}>send</button>
        </div>
    )
}