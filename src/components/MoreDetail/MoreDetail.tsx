//other import
import React from 'react';
//styles
import styles from './MoreDetail.module.scss';
import {ProductCard} from '../ProductsField/ProductCard/ProductCard';

//my components

interface IProductObj {
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
    moreDetailData: IProductObj
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    basketData: Array<IProductObj>
    activeTab?: number
    changeActiveTab?: (activeTab: number) => void
}

export const MoreDetail: React.FC<IPropsTypes> = ({moreDetailData, toggleToBasket, basketData, changeActiveTab, activeTab}) => {
    return (
        <div className={`${styles.moreDetail} container`}>
            <ProductCard activeTab={activeTab} changeActiveTab={changeActiveTab} cardStyle={3} {...moreDetailData} toggleToBasket={toggleToBasket} basketData={basketData}/>
        </div>
    )
};