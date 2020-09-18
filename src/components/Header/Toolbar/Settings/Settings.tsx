//other import
import React from 'react';
//styles
import styles from './Settings.module.scss';
//my components

export const Settings = () => {
    return (
        <div className={styles.settings}>
            <span>Укр</span>/<span>Рус</span>
            <div className={styles.slider}>Ползунок</div>
        </div>
    )
};

