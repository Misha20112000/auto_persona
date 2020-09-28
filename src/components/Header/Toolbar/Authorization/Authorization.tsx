//other import
import React from 'react';
import {Animated} from 'react-animated-css';
//styles
import styles from './Authorization.module.scss';
//my components

export const Authorization = () => {
    return (
        <Animated className={styles.authorizationWrapper}
                  animationIn="fadeInDown"
                  animationInDuration={1900}
                  animationOut="fadeOut" isVisible={true}>
            <div className={styles.authorization}>
                <span>Вхід</span>/<span>Реєстрація</span>
            </div>
        </Animated>
    )
};

