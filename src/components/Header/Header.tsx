//other import
import React from 'react';
//styles
import styles from './Header.module.scss';
//my components
import {Logo} from './Logo/Logo';
import {Toolbar} from './Toolbar/Toolbar';

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <header className={`${styles.header} container`}>
                <Logo/>
                <Toolbar/>
            </header>
        </div>
    )
};

