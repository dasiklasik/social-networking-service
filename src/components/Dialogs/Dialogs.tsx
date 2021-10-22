import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <li className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}

type MessageItemPropsType = {
    content: string
}

function MessageItem(props: MessageItemPropsType) {
    return (
        <li className={s.message}>{props.content}</li>
    )
}

type dialogsDataType = {
    id: number
    name: string
}

type messagesDataType = {
    id: number
    message: string
}


function Dialogs() {

    const dialogsData: Array<dialogsDataType> = [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Masha'}
    ]

    const messagesData: Array<messagesDataType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello!'}
    ]

    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_list_wrapper}>
                    <ul className={s.dialogs_list}>
                        <DialogItem name={'Kate'} id={'1'}/>
                        <DialogItem name={'Dasha'} id={'2'}/>
                        <DialogItem name={'Masha'} id={'3'}/>
                    </ul>
                </div>
                <div className={s.dialog_field_wrapper}>
                    <ul className={s.dialog_field}>
                       <MessageItem content={"Hi"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;