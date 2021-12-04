import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {actionType, dialogsDataType, dialogsPageType, messagesDataType} from "../../redux/state";
import {MessageForm} from "./MessageForm/MessageForm";


type dialogsPropsType = {
    // dialogsPage: dialogsPageType
    // dispatch: (action: actionType) => void
    dialogsData: any
    messageData: any
    addMessage: () => void
    changeMessage: (text: string) => void
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
                    <MessageForm addMessage={props.addMessage} changeMessage={props.changeMessage}
                                 newDialogMessageText={props.newMessageText}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;