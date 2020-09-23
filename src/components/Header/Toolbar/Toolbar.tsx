//other import
import React from 'react';
//styles
import styles from './Toolbar.module.scss';
//my components
import Menu from './Menu/Menu';
import {Settings} from './Settings/Settings';
import {Authorization} from './Authorization/Authorization';

export const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Menu/>
            <Settings/>
            <Authorization/>
        </div>
    )
};

