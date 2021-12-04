import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {actionType, dialogsPageType} from "../../redux/state";
import {MessageForm} from "./MessageForm/MessageForm";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeTypedDialogMessageActionCreator} from "../../redux/dialogsReducer";


type dialogsContainerPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: actionType) => void
}


export function DialogsContainer(props: dialogsContainerPropsType) {


    const dialogsArray = props.dialogsPage.dialogsData.map(t => <DialogItem state={t}/>)
    const messageArray = props.dialogsPage.messagesData.map(t => <MessageItem state={t}/>)

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const changeMessage = (text: string) => {
        props.dispatch(changeTypedDialogMessageActionCreator(text))
    }

    return (
        <Dialogs dialogsData={dialogsArray} messageData={messageArray}
                 addMessage={addMessage}
        changeMessage={changeMessage} newMessageText={props.dialogsPage.newDialogMessageText}/>
    )
}

