//other import
import React from 'react';
import {connect} from 'react-redux';
//my components
import {Basket} from './Basket';
//func
import {minus, plus, toggleToBasket} from '../../redux/basketReducer';
//types
import {AppStateType} from '../../redux/store';

interface IProduct {
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
    basketData: Array<IProduct>
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    plus: (id: string) => void
    minus: (id: string) => void
}

const BasketContainer: React.FC<IPropsTypes> = ({basketData, toggleToBasket, plus, minus}) => {
    return <Basket minus={minus} plus={plus} basketData={basketData} toggleToBasket={toggleToBasket}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {toggleToBasket, plus, minus})(BasketContainer);