//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './Gratitude.module.scss';

export const Gratitude = () => {
    return (
        <div className={styles.gratitude}>
            Дякуємо, що обрали наш сервіс! <br/><br/> Невдовзі з вами звяжеться наш оператор для підтвердження замовлення. <br/><br/>Гарного
            дня! <br/><NavLink to='/home'>На головну</NavLink>
        </div>
    )
};