import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    logout: () => void
    isAuth: boolean
    login: string | null
}

export function Header(props: HeaderPropsType) {

    const {
        isAuth,
        login,
        logout
    } = props

    return (
        <header className={s.main_header}>
            <img
                src={'https://fs.getcourse.ru/fileservice/file/download/a/33058/sc/207/h/14f49ae4d692824ba22fbf13a797ed88.png'}
                alt={'logo'}/>
            <div className={s.loginBlock}>
                {isAuth ? <><span>Welcome {login}</span><button onClick={logout}>Log out</button></>
                    :<NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}