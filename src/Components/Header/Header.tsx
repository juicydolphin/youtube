import React from 'react';
import s from './header.module.scss'
import logo from "../../assets/img/logo.svg"

const Header = () => {
    return (
        <div className={s.header}>
        <div className={s.container}>
            <div className={s.leftSide}>
                <div className={s.logo}><img src={logo} alt="logo"/></div>
                <a className={s.search} href='#'>Поиск</a>
                <a className={s.favorites} href='#'>Избранное</a>
            </div>
            <a className={s.logout} href='#'>Выйти</a>
        </div>
        </div>
    );
};

export default Header;