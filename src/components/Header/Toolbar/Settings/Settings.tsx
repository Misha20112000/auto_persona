//other import
import React from 'react';
import {Animated} from 'react-animated-css';
//styles
import styles from './Settings.module.scss';
//my components

export const Settings = () => {
    return (
        <div className={styles.settings}>
            <Animated className={styles.spanWrapper} animationIn="fadeInDown" animationInDuration={1500} animationOut="fadeOut" isVisible={true}><span>Укр</span>/<span>Рус</span></Animated>
            <Animated className={styles.spanWrapper} animationIn="fadeInDown" animationInDuration={1700} animationOut="fadeOut" isVisible={true}><div className={styles.slider}>Ползунок</div></Animated>
        </div>
    )
};

