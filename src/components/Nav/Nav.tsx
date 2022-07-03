import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "./Friends/FriendsContainer";

export function Nav() {
    return (
        <nav className={s.main_menu}>
            <ul>
                <li className={s.item}><NavLink to="/profile" className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" className={({isActive}) => isActive ? s.active : ''}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" className={({isActive}) => isActive ? s.active : ''}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" className={({isActive}) => isActive ? s.active : ''}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" className={({isActive}) => isActive ? s.active : ''}>Setting</NavLink></li>
                <li className={s.item}><NavLink to="/users" className={({isActive}) => isActive ? s.active : ''}>Users</NavLink></li>
            </ul>
            <FriendsContainer/>
        </nav>
    )
}