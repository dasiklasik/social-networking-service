import React from "react"
import s from './Friend.module.css'
import {friendsDataType} from "../../../../redux/state";

type friendPropsType = {
    state: friendsDataType
}

export const Friend = (props: friendPropsType) => {
    return (
        <li className={s.item} key={props.state.id}>
            <img src={props.state.avatar}/>
            <div className={s.name}>{props.state.name}</div>
        </li>
    )
}