//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//images
import star from '../../../assets/img/smallIcons/star.svg';
import emptyStar from '../../../assets/img/smallIcons/emptyStar.svg';
import basket from '../../../assets/img/smallIcons/basket.svg';
import dagger from '../../../assets/img/smallIcons/dagger.svg';
//styles
import styles1 from './ProductCard_1.module.scss';
import styles2 from './ProductCard_2.module.scss';

//my components

interface IPropsTypes {
    name: string
    condition: string
    rating: number
    wantToBuy: number
    inBasket: boolean
    imgs: Array<string>
    comments: Array<string>
    amount: number
    producer: string
    id: string
    price: number
    specialCharacteristics: object
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    cardStyle: number
    plus: (id: string) => void
    minus: (id: string) => void
}

export const ProductCard: React.FC<IPropsTypes> = ({name, condition, rating, wantToBuy, imgs, comments, amount, producer, id, price, specialCharacteristics, toggleToBasket, cardStyle, plus, minus}) => {
    let stylesIf;
    switch (cardStyle) {
        case 2: {
            stylesIf = styles2;
            break;
        }
        default:
            stylesIf = styles1;
    }

    const toggleProductToBasket = () => {
        toggleToBasket(name, condition, rating, wantToBuy, imgs, comments, amount, producer, id, price, specialCharacteristics)
    };

    const starsArray = [];

    for (let i = 0; i < rating; i++) {
        starsArray.push(i);
    }

    const startArrayAfterMap = starsArray.map(number => <img key={number} src={star} alt=""/>)

    const plusProduct = () => {
        if (wantToBuy < amount) {
            plus(id);
        } else {
            alert('Неможлива операція.')
        }
    };

    const minusProduct = () => {
        if (wantToBuy > 1) {
            minus(id);
        } else {
            alert('Неможлива операція.')
        }
    }

    return (
        <div className={stylesIf.productCardWrapper}>

            <div className={stylesIf.productCard}>
                <img onClick={() => toggleProductToBasket()}
                     className={stylesIf.basket} src={basket} alt=""/>
                <img onClick={() => toggleProductToBasket()} className={stylesIf.dagger} src={dagger} alt=""/>
                <div className={stylesIf.buyZone}>
                    <div className={stylesIf.amount}>
                        <p className={stylesIf.title}>Кількість</p>
                        <span onClick={minusProduct} className={stylesIf.minus}> </span>
                        <span>{wantToBuy}</span>
                        <span onClick={plusProduct} className={stylesIf.plus}> </span>
                    </div>
                    <div className={stylesIf.price}>
                        {price}<span>грн</span>
                    </div>
                    <div className={stylesIf.totalPrice}>
                        Вартість за {wantToBuy}шт. - {price * wantToBuy}грн
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgs[0]})`}} className={stylesIf.bgImg}>
                    {condition === 'action' ? <div className={stylesIf.action}>Акція!</div> : null}
                </div>
                <div className={stylesIf.cardContent}>
                    <div className={stylesIf.name}>{name}</div>
                    <div className={stylesIf.stars}>
                        <div className={stylesIf.emptyStars}>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                        </div>
                        <div className={stylesIf.fullStars}>
                            {startArrayAfterMap}
                        </div>
                    </div>
                    <div className={stylesIf.comment}>Залишити відгук</div>
                    {amount ? <div className={stylesIf.inStock}>В наявності {amount} шт.</div> :
                        <div className={stylesIf.havNot}>Зараз немає</div>}
                    <div className={stylesIf.producer}>Виробник: {producer}</div>
                    <div className={stylesIf.id}>Код товару: {id}</div>
                    <NavLink className={stylesIf.moreDetail} to='/moreDetail'>Детальніше</NavLink>
                    <div className={stylesIf.price}>{price}<span>грн</span></div>

                    <NavLink to='/buy'>
                        {/*Тут сетаєм в LS продукт*/}
                        Купити 1шт.
                    </NavLink>

                </div>

            </div>

        </div>
    )
};

