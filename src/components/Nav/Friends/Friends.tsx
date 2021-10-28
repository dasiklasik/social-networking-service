import React from "react"
import s from './Friends.module.css'
import {friendsDataType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";


type friendsPropsType = {
    state: Array<friendsDataType>
}

export const Friends = (props: friendsPropsType) => {

    const friendsArray = props.state.map(t => <Friend state={t}/>)

    return (
        <div>
            <h2 className={s.header}>Friends</h2>
            <ul className={s.wrapper}>
                {friendsArray}
            </ul>
        </div>
    )
}