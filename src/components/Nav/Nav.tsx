import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {navbarType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

type navPropsType = {
    state: navbarType
}

export function Nav(props: navPropsType) {
    return (
        <nav className={s.main_menu}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Setting</NavLink></li>
            </ul>
            <Friends state={props.state.friendsData}/>
        </nav>
    )
}