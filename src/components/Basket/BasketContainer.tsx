//other import
import React from 'react';
import {connect} from 'react-redux';
//my components
import {Basket} from './Basket';
//func
import {minus, plus, toggleToBasket} from '../../redux/basketReducer';
//types
import {AppStateType} from '../../redux/store';

interface IPropsTypes {
    basketData: Array<IProductObject>
    toggleToBasket: (product: IProductObject) => void
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