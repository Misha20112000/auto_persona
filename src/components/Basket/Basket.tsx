//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './Basket.module.scss';
//my components
import {ProductCard} from '../ProductsField/ProductCard/ProductCard';

interface IProduct {
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
}

interface IPropsTypes {
    basketData: Array<IProduct>
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    plus: (id: string) => void
    minus: (id: string) => void
    setMoreDetailData: (product: any) => void
}

export const Basket: React.FC<IPropsTypes> = ({basketData, toggleToBasket, plus, minus, setMoreDetailData}) => {

    const basketDataAfterMap = basketData.map(product => <ProductCard cardStyle={2}
                                                                      key={product.id}
                                                                      {...product}
                                                                      minus={minus}
                                                                      plus={plus}
                                                                      basketData={basketData}
                                                                      setMoreDetailData={setMoreDetailData}
                                                                      toggleToBasket={toggleToBasket}/>)

    return (
        <div className={`${styles.basket} container`}>
            {basketDataAfterMap}
            {basketDataAfterMap.length > 0
                ? <NavLink to='/check/basket' className={styles.button}>Підтвердити замовлення</NavLink>
                : <div className={styles.empty}>Корзина порожня :((</div>}
        </div>
    )
};