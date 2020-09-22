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
    inBasket: boolean
    imgs: Array<string>
    comments: Array<string>
    amount: number
    producer: string
    id: string
    price: number
    specialCharacteristics: object
    toggleToBasket: (name: string, condition: string, rating: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    cardStyle: number
}

export const ProductCard: React.FC<IPropsTypes> = ({name, condition, rating, imgs, comments, amount, producer, id, price, specialCharacteristics, toggleToBasket, cardStyle}) => {
    let stylesIf;
    if (cardStyle === 1) {
        stylesIf = styles1;
    } else {
        stylesIf = styles2;
    }

    switch (cardStyle) {
        case 2: {
            stylesIf = styles2;
            break;
        }
        default:
            stylesIf = styles1;
    }

    const toggleProductToBasket = () => {
        toggleToBasket(name, condition, rating, imgs, comments, amount, producer, id, price, specialCharacteristics)
    };

    return (
        <div className={stylesIf.productCardWrapper}>

            <div className={stylesIf.productCard}>
                <img onClick={() => toggleProductToBasket()}
                     className={stylesIf.basket} src={basket} alt=""/>
                <img onClick={() => toggleProductToBasket()} className={stylesIf.dagger} src={dagger} alt=""/>
                <div className={stylesIf.buyZone}>
                    <div className={stylesIf.amount}>
                        <p className={stylesIf.title}>Кількість</p>
                        <span className={stylesIf.minus}></span>
                        <span>1</span>
                        <span className={stylesIf.plus}></span>
                    </div>
                    <div className={stylesIf.price}>
                        {price}<span>грн</span>
                    </div>
                    <div className={stylesIf.totalPrice}>
                        Вартість за 1шт. - 10190грн
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgs[0]})`}} className={stylesIf.bgImg}>
                    {condition === 'action' ? <div className={stylesIf.action}>Акція!</div> : null}
                </div>
                <div className={stylesIf.cardContent}>
                    <div className={stylesIf.name}>{name}</div>
                    <div className={stylesIf.stars}>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={star} alt=""/>
                        <img src={emptyStar} alt=""/>
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

