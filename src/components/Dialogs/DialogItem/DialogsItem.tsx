import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <li className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}



export default DialogItem;