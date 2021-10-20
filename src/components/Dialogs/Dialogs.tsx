import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs_list_wrapper}>
                    <ul className={s.dialogs_list}>
                        <li className={s.dialog}>
                            <NavLink to='/person'>Kate</NavLink>
                        </li>
                        <li className={`${s.dialog} ${s.active}`}>
                            <NavLink to='/person'>Dasha</NavLink>
                        </li>
                        <li className={s.dialog}>
                            <NavLink to='/person'>Max</NavLink>
                        </li>
                        <li className={s.dialog}>
                            <NavLink to='/person'>Vlada</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={s.dialog_field_wrapper}>
                    <ul className={s.dialog_field}>
                        <li className={s.message}>Hi</li>
                        <li className={s.message}>Hello</li>
                        <li className={s.message}>Yo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;