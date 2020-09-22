//other import
import React from 'react';
//styles
import styles from './Basket.module.scss';
import {ProductCard} from '../ProductsField/ProductCard/ProductCard';

//my components

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
}

export const Basket: React.FC<IPropsTypes> = ({basketData, toggleToBasket, plus, minus}) => {

    const basketDataAfterMap = basketData.map(product => <ProductCard cardStyle={2}
                                                                      key={product.id}
                                                                      {...product}
                                                                      minus={minus}
                                                                      plus={plus}
                                                                      toggleToBasket={toggleToBasket}/>)

    return (
        <div className={`${styles.basket} container`}>
            {basketDataAfterMap}
        </div>
    )
};