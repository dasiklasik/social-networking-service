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


function Dialogs() {
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