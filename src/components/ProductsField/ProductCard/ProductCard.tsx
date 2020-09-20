//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//images
import star from '../../../assets/img/smallIcons/star.svg';
import emptyStar from '../../../assets/img/smallIcons/emptyStar.svg';
import basket from '../../../assets/img/smallIcons/basket.svg';
//styles
import styles from './ProductCard.module.scss';

//my components

interface IPropsTypes {
    name: string
    condition: string
    rating: number
    inBasket: boolean
    imgs: Array<string>
    comments: Array<string>
    amount: number
    producer: string
    id: string
    price: number
    specialCharacteristics: object
}

export const ProductCard: React.FC<IPropsTypes> = ({name, condition, rating, inBasket, imgs, comments, amount, producer, id, price, specialCharacteristics}) => {
    return (
        <div className={styles.productCardWrapper}>

            <div className={styles.productCard}>
                <img onClick={() => alert(12)} className={styles.basket} src={basket} alt=""/>
                <div style={{backgroundImage: `url(${imgs[0]})`}} className={styles.bgImg}>
                    {condition === 'action' ? <div className={styles.action}>Акція!</div> : null}
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.stars}>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={emptyStar} alt=""/>
                    </div>
                    <div className={styles.comment}>Залишити відгук</div>
                    {amount ? <div className={styles.inStock}>В наявності {amount} шт.</div> :
                        <div className={styles.havNot}>Зараз немає</div>}
                    <div className={styles.producer}>Виробник: {producer}</div>
                    <div className={styles.id}>Код товару: {id}</div>
                    <div className={styles.price}>{price}<span>грн</span></div>

                    <NavLink to='/buy'>
                        {/*Тут сетаєм в LS продукт*/}
                        Купити
                    </NavLink>

                </div>
            </div>

        </div>
    )
};

