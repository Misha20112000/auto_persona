//other import
import React from 'react';
import {Animated} from 'react-animated-css';
//styles
import styles from './SearchField.module.scss';
//my components

export const SearchField = () => {
    return (
        <div className={`${styles.searchField} container`}>
            <Animated className={styles.inputWrapper} animationIn="bounceInLeft" animationOut="bounceInLeft" animationInDuration={1000} isVisible={true}><input placeholder='Пошук по назві/коду товару:' type="text"/>
            </Animated>
            <Animated animationIn="bounceInDown" animationOut="bounceInLeft" animationInDuration={1000}
                      isVisible={true}>
                <button>Найти</button>
            </Animated>
        </div>
    )
};

