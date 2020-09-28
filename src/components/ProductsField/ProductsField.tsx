//other import
import React from 'react';
//styles
import styles from './ProductsField.module.scss';
//my components
import {ProductCard} from './ProductCard/ProductCard';

interface IPropsTypes {
    productsData: Array<IProductObject>
    basketData: Array<IProductObject>
    toggleToBasket: (product: IProductObject) => void
    setSinglePurchaseData: (product: IProductObject) => void
}

export const ProductsField: React.FC<IPropsTypes> = ({productsData, basketData, toggleToBasket, setSinglePurchaseData}) => {

    const productsDataAfterMap = productsData.map(product => <ProductCard cardStyle={1}
                                                                          key={product.id}
                                                                          productData={product}
                                                                          basketData={basketData}
                                                                          setSinglePurchaseData={setSinglePurchaseData}
                                                                          toggleToBasket={toggleToBasket}/>)

    return (
        <>
            <div className={`${styles.productsFiled} container`}>
                {productsDataAfterMap}
            </div>
            <div className={styles.more}>Більше</div>
        </>
    )
};


