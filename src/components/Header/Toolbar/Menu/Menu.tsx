//other import
import React from 'react';
import {NavLink} from "react-router-dom";
//styles
import styles from './Menu.module.scss';
//my components

export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><NavLink activeClassName={styles.active} to='/home'>Головна</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/basket'>Корзина</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/HBO_manufacturers'>Виробники ГБО</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/contacts'>Контакти</NavLink></li>
            </ul>
        </nav>
    )
};

