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
    toggleToBasket: (name :string, condition: string, rating :number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
}

const ProductsField: React.FC<IPropsTypes> = ({productsData, basketData, toggleToBasket}) => {

    // @ts-ignore
    const productsDataAfterMap = productsData.map(product => <ProductCard cardStyle={1} key={product.id} {...product} basketData={basketData} toggleToBasket={toggleToBasket}/>)

    return (
        <div className={`${styles.productsFiled} container`}>
            {productsDataAfterMap}
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        // @ts-ignore
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {toggleToBasket})(ProductsField);

