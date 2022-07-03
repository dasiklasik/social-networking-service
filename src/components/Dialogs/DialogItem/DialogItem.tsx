import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css'
import {dialogsDataType} from "../../../redux/state";

type DialogItemPropsType = {
    state: dialogsDataType
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <li className={s.dialog} key={props.state.id}>
            <img src={props.state.avatar}/>
            <NavLink to={`/dialogs/${props.state.id}`} className={({isActive}) =>
            isActive ? s.active : ''
            }>{props.state.name}</NavLink>
        </li>
    )
}



export default DialogItem;