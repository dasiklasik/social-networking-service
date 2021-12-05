import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {actionType, stateType} from "../../redux/state";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeTypedDialogMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";



const mapStateToProps = (state: stateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData.map(t => <DialogItem state={t}/>),
        messageData: state.dialogsPage.messagesData.map(t => <MessageItem state={t}/>),
        newMessageText: state.dialogsPage.newDialogMessageText
    }
}


const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        changeMessage: (text: string) => {
            dispatch(changeTypedDialogMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)