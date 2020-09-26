//other import
import React from 'react';
import {connect} from 'react-redux';
//styles
import styles from './ProductsField.module.scss';
//my components
import {ProductCard} from './ProductCard/ProductCard';
//func
import {toggleToBasket} from '../../redux/basketReducer';
//types
import {AppStateType} from '../../redux/store';

interface IProductObject {
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
    productsData: Array<IProductObject>
    basketData: any
    setMoreDetailData: (product: any) => void
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
}

const ProductsField: React.FC<IPropsTypes> = ({productsData, basketData, toggleToBasket, setMoreDetailData}) => {

    // @ts-ignore
    const productsDataAfterMap = productsData.map(product => <ProductCard cardStyle={1} key={product.id} {...product}
                                                                          basketData={basketData}
                                                                          toggleToBasket={toggleToBasket}
                                                                          setMoreDetailData={setMoreDetailData}/>)

    return (
        <>
            <div className={`${styles.productsFiled} container`}>
                {productsDataAfterMap}
            </div>
            <div className={styles.more}>Більше</div>
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {toggleToBasket})(ProductsField);

