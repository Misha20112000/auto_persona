//other import
import React from 'react';
//styles
import styles from './ProductsField.module.scss';
//my components
import {ProductCard} from './ProductCard/ProductCard';

interface IProductObject {
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
    productsData: Array<IProductObject>
}

export const ProductsField: React.FC<IPropsTypes> = ({productsData}) => {

    const productsDataAfterMap = productsData.map(product => <ProductCard key={product.id} {...product}
    />)

    return (
        <div className={`${styles.productsFiled} container`}>
            {productsDataAfterMap}
        </div>
    )
};

