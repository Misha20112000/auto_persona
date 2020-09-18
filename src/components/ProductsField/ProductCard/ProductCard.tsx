//other import
import React from 'react';
//styles
import styles from './ProductCard.module.scss';
//my components

export const ProductCard = () => {
    return (
        <div className={styles.productCardWrapper}>

            <div className={styles.productCard}>
                <div className={styles.bgImg}></div>
                <div className={styles.cardContent}>
                    <div className={styles.name}>Коромисло другої ступені редуктора Atiker VR01, VR02
                    </div>
                    {/*<div className={styles}></div>*/}
                    <div className={styles.comment}>Залишити відгук</div>
                    <div className={styles.availability}>Наявність</div>
                    <div className={styles.producer}>Виробник: лала</div>
                    <div className={styles.id}>Код товару: лала</div>
                    <div className={styles.price}>57<span>грн</span></div>
                    {/*<Button/>*/}
                </div>
            </div>

        </div>
    )
};

