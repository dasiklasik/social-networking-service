import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, changeDialogMessage} from "../../redux/dialogsReducer";
import {reduxStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



const mapStateToProps = (state: reduxStoreType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData.map(t => <DialogItem state={t}/>),
        messageData: state.dialogsPage.messagesData.map(t => <MessageItem state={t}/>),
        newMessageText: state.dialogsPage.newDialogMessageText,
        isAuth: state.auth.isAuth,
    }
}

const propsFunctions = {
    addMessage,
    changeDialogMessage,
}
debugger
const DialogsWithRedirect = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, propsFunctions)(DialogsWithRedirect)


