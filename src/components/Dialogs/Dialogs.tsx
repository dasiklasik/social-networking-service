import React from "react";
import s from './Dialogs.module.css'
import {MessageForm} from "./MessageForm/MessageForm";
import {dialogsDataType, messagesDataType} from "../../redux/state";
import {changeDialogMessageType} from "../../redux/dialogsReducer";


type dialogsPropsType = {
    dialogsData: JSX.Element[]
    messageData: JSX.Element[]
    addMessage: () => void
    changeDialogMessage: (text: string) => void
    newMessageText: string
}


function Dialogs(props: dialogsPropsType) {


    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_list_wrapper}>
                    <ul className={s.dialogs_list}>
                        {props.dialogsData}
                    </ul>
                </div>
                <div className={s.dialog_field_wrapper}>
                    <ul className={s.dialog_field}>
                        {props.messageData}
                    </ul>
                    <MessageForm addMessage={props.addMessage} changeMessage={props.changeDialogMessage}
                                 newDialogMessageText={props.newMessageText}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;