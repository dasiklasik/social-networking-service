import React, {ChangeEvent} from "react";
import s from './MessageForm.module.css'
import {actionType} from "../../../redux/state";
import { addMessageActionCreator, changeTypedDialogMessageActionCreator } from "../../../redux/dialogsReducer";

type messageFormPropsType = {
    addMessage: () => void
    changeMessage: (text: string) => void
    newDialogMessageText: string
}

export const MessageForm = (props: messageFormPropsType) => {

    const newMessageRef = React.createRef<HTMLTextAreaElement>();

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
       props.changeMessage(text)
    }

    const addMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.message_form}>
            <textarea value={props.newDialogMessageText} onChange={onChangeMessage} ref={newMessageRef}></textarea>
            <button onClick={addMessage}>send</button>
        </div>
    )
}