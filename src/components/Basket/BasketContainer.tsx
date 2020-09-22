//other import
import React from 'react';
import {connect} from 'react-redux';
//styles
import styles from './Basket.module.scss';
//my components
import {Basket} from './Basket';
//func
import {toggleToBasket} from '../../redux/basketReducer';
//types
import {AppStateType} from '../../redux/store';

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

const BasketContainer: React.FC<IPropsTypes> = ({basketData, toggleToBasket}) => {
    return <Basket basketData={basketData} toggleToBasket={toggleToBasket}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {toggleToBasket})(BasketContainer);