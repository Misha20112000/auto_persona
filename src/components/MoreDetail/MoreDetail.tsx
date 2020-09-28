//other import
import React from 'react';
//styles
import styles from './MoreDetail.module.scss';
//my components
import {ProductCard} from '../ProductsField/ProductCard/ProductCard';

interface IPropsTypes {
    singlePurchaseData: IProductObject
    basketData: Array<IProductObject>
    setSinglePurchaseData: (product: IProductObject) => void
    toggleToBasket: (product: IProductObject) => void
    activeTab: number
    changeActiveTab: (activeTab: number) => void
}

export const MoreDetail: React.FC<IPropsTypes> = ({singlePurchaseData, basketData, setSinglePurchaseData, toggleToBasket, activeTab, changeActiveTab}) => {
    return (
        <div className={`${styles.moreDetail} container`}>
            <ProductCard cardStyle={3}
                         productData={singlePurchaseData}
                         basketData={basketData}
                         setSinglePurchaseData={setSinglePurchaseData}
                         activeTab={activeTab}
                         changeActiveTab={changeActiveTab}
                         toggleToBasket={toggleToBasket}/>
        </div>
    )
}




