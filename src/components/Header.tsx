import React from "react";
import s from './Header.module.css'

export function Header() {
    return (
        <header className={s.main_header}>
            <img
                src={'https://fs.getcourse.ru/fileservice/file/download/a/33058/sc/207/h/14f49ae4d692824ba22fbf13a797ed88.png'}
                alt={'logo'}/>
        </header>
    )
}