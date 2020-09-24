//other import
import React from 'react';
import {Animated} from 'react-animated-css';
//styles
import styles from './Authorization.module.scss';
//my components

export const Authorization = () => {
    return (
        <div className={styles.authorization}>
            <Animated className={styles.authorizationWrapper} animationIn="fadeInDown" animationInDuration={1900} animationOut="fadeOut" isVisible={true}><span>Вхід</span>/<span>Реєстрація</span></Animated>
        </div>
    )
};

