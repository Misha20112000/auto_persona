//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//images
import star from './../../../assets/img/star.svg';
import emptyStar from './../../../assets/img/emptyStar.svg';
import basket from './../../../assets/img/basket.svg';
//styles
import styles from './ProductCard.module.scss';
//my components

export const ProductCard = () => {
    return (
        <div className={styles.productCardWrapper}>

            <div className={styles.productCard}>
                <img className={styles.basket} src={basket} alt=""/>
                <div className={styles.bgImg}>
                    <div className={styles.action}>Акція!</div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.name}>Коромисло другої ступені редуктора Atiker VR01, VR02</div>
                    <div className={styles.stars}>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={emptyStar} alt=""/>
                    </div>
                    <div className={styles.comment}>Залишити відгук</div>
                    <div className={styles.availability}>Наявність</div>
                    <div className={styles.producer}>Виробник: лала</div>
                    <div className={styles.id}>Код товару: лала</div>
                    <div className={styles.price}>57<span>грн</span></div>

                    <NavLink to='/buy'>
                        {/*Тут сетаєм в LS продукт*/}
                        Купити
                    </NavLink>

                </div>
            </div>

        </div>
    )
};

