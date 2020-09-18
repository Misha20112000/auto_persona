//other import
import React from 'react';
//styles
import styles from './Authorization.module.scss';
//my components

export const Authorization = () => {
    return (
        <div className={styles.authorization}>
            <span>Вхід</span>/<span>Реєстрація</span>
        </div>
    )
};

