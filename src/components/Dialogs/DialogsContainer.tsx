import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {actionType, stateType} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, changeDialogMessage, changeDialogMessageType} from "../../redux/dialogsReducer";



const mapStateToProps = (state: stateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData.map(t => <DialogItem state={t}/>),
        messageData: state.dialogsPage.messagesData.map(t => <MessageItem state={t}/>),
        newMessageText: state.dialogsPage.newDialogMessageText
    }
}


// const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
//     return {
//         changeMessage: (text: string) => {
//             dispatch(changeTypedDialogMessageActionCreator(text))
//         },
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         }
//     }
// }

const propsFunctions = {
    addMessage,
    changeDialogMessage,
}

export const DialogsContainer = connect(mapStateToProps, propsFunctions)(Dialogs)


