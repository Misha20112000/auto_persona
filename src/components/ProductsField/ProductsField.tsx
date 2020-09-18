//other import
import React from 'react';
//styles
import styles from './ProductsField.module.scss';
//my components
import {ProductCard} from './ProductCard/ProductCard';

export const ProductsField = () => {
    return (
        <div className={`${styles.productsFiled} container`}>
            <ProductCard/>
        </div>
    )
};

