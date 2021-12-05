import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "./Friends/FriendsContainer";

export function Nav() {
    return (
        <nav className={s.main_menu}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Setting</NavLink></li>
            </ul>
            <FriendsContainer/>
        </nav>
    )
}