//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './Basket.module.scss';
//my components
import {ProductCard} from '../ProductsField/ProductCard/ProductCard';

interface IPropsTypes {
    basketData: Array<IProductObject>
    toggleToBasket: (product: IProductObject) => void
    plus: (id: string) => void
    minus: (id: string) => void
}

export const Basket: React.FC<IPropsTypes> = ({basketData, toggleToBasket, plus, minus}) => {

    const basketDataAfterMap = basketData.map((product) => <ProductCard cardStyle={2}
                                                                      key={product.id}
                                                                      productData={product}
                                                                      minus={minus}
                                                                      plus={plus}
                                                                      basketData={basketData}
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