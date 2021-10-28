import React from "react";
import s from './MessageItem.module.css'
import {messagesDataType} from "../../../redux/state";

type MessageItemPropsType = {
    state: messagesDataType
}

function MessageItem(props: MessageItemPropsType) {

    let whoseMessage = props.state.myMessage ? 'right' : 'left'

    return (
        <li className={`${s.message} ${s[whoseMessage]}`} key={props.state.id}>{props.state.message}</li>
    )
}






export default MessageItem;