//other import
import React from 'react';
//styles
import styles from './ProductsField.module.scss';
//my components
import {ProductCard} from './ProductCard/ProductCard';

interface IPropsTypes {
    productsData: Array<object>
}

export const ProductsField:React.FC<IPropsTypes> = ({productsData}) => {
    return (
        <div className={`${styles.productsFiled} container`}>
            <ProductCard/>
        </div>
    )
};

