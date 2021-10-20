import React from "react";
import s from './Nav.module.css'

export function Nav() {
    return (
        <nav className={s.main_menu}>
            <ul>
                <li className={s.item}><a href="/profile">Profile</a></li>
                <li className={s.item}><a href="/dialogs">Messages</a></li>
                <li className={s.item}><a href="/news">News</a></li>
                <li className={s.item}><a href="/music">Music</a></li>
                <li className={s.item}><a href="/settings">Setting</a></li>
            </ul>
        </nav>
    )
}