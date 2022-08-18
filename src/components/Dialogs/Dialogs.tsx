import React from "react";
import s from './Dialogs.module.css'
import MessageForm, {messageFormType} from "./MessageForm/MessageForm";
import {Navigate} from "react-router-dom";


type dialogsPropsType = {
    dialogsData: JSX.Element[]
    messageData: JSX.Element[]
    addMessage: (text: string) => void
    isAuth: boolean
}


export const Dialogs = (props: dialogsPropsType) => {

    const {
        dialogsData,
        messageData,
        addMessage,
        isAuth,
    } = props

    const submit = (data: messageFormType) => {
        addMessage(data.dialogMessage)
    }

    if(isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_list_wrapper}>
                    <ul className={s.dialogs_list}>
                        {dialogsData}
                    </ul>
                </div>
                <div className={s.dialog_field_wrapper}>
                    <ul className={s.dialog_field}>
                        {messageData}
                    </ul>
                    <MessageForm onSubmit={submit}/>
                </div>
            </div>
        </div>
    )
}