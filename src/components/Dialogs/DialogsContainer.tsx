import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {connect} from "react-redux";
import {addMessage} from "../../redux/reducers/dialogs-reducer";
import {reduxStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: reduxStoreType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData.map(t => <DialogItem state={t}/>),
        messageData: state.dialogsPage.messagesData.map(t => <MessageItem state={t}/>),
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect,
)(Dialogs)



