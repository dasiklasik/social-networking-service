import React from "react";
import s from './Nav.module.css'

export function Nav() {
    return (
        <nav className={s.main_menu}>
            <ul>
                <li className={s.item}><a>Profile</a></li>
                <li className={s.item}><a>Messages</a></li>
                <li className={s.item}><a>News</a></li>
                <li className={s.item}><a>Music</a></li>
                <li className={s.item}><a>Setting</a></li>
            </ul>
        </nav>
    )
}