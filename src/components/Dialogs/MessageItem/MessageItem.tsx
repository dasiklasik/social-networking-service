import React from "react";
import s from './../Dialogs.module.css'

type MessageItemPropsType = {
    content: string
}

function MessageItem(props: MessageItemPropsType) {
    return (
        <li className={s.message}>{props.content}</li>
    )
}






export default MessageItem;