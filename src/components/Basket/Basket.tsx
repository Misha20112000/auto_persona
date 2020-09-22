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
    toggleToBasket: (name: string, condition: string, rating: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
}

export const Basket: React.FC<IPropsTypes> = ({basketData, toggleToBasket}) => {

    const basketDataAfterMap = basketData.map(product => <ProductCard cardStyle={2} key={product.id} {...product}
                                                                      toggleToBasket={toggleToBasket}/>)

    return (
        <div className={`${styles.basket} container`}>
            {basketDataAfterMap}
        </div>
    )
};