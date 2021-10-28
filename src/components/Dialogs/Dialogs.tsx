import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/state";


type dialogsPropsType = {
    state: dialogsPageType
}




function Dialogs(props: dialogsPropsType) {


    const dialogsArray = props.state.dialogsData.map(t => <DialogItem state={t}/>)
    const messageArray = props.state.messagesData.map(t => <MessageItem state={t}/>)

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_list_wrapper}>
                    <ul className={s.dialogs_list}>
                        {dialogsArray}
                    </ul>
                </div>
                <div className={s.dialog_field_wrapper}>
                    <ul className={s.dialog_field}>
                        {messageArray}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;