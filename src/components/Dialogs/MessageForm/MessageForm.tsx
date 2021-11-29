import React, {ChangeEvent} from "react";
import s from './MessageForm.module.css'
import {actionType} from "../../../redux/state";
import { addMessageActionCreator, changeTypedDialogMessageActionCreator } from "../../../redux/dialogsReducer";

type messageFormPropsType = {
    dispatch: (action: actionType) => void
    newDialogMessageText: string
}

export const MessageForm = (props: messageFormPropsType) => {

    const newMessageRef = React.createRef<HTMLTextAreaElement>();

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(changeTypedDialogMessageActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        // alert(newMessageRef.current?.value)
    }

    return (
        <div className={s.message_form}>
            <textarea value={props.newDialogMessageText} onChange={changeMessage} ref={newMessageRef}></textarea>
            <button onClick={addMessage}>send</button>
        </div>
    )
}