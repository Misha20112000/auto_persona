//other import
import React from 'react';
import {connect} from 'react-redux';
//my components
import {Basket} from './Basket';
//func
import {minus, plus, toggleToBasket} from '../../redux/basketReducer';
import {setSinglePurchaseData} from '../../redux/singlePurchaseReducer';
//types
import {AppStateType} from '../../redux/store';

interface IPropsTypes {
    basketData: Array<IProductObject>
    toggleToBasket: (product: IProductObject) => void
    plus: (id: string) => void
    minus: (id: string) => void
    setSinglePurchaseData: (product: IProductObject) => void
}

const BasketContainer: React.FC<IPropsTypes> = ({basketData, toggleToBasket, plus, minus, setSinglePurchaseData}) => {
    return <Basket minus={minus} plus={plus} basketData={basketData} toggleToBasket={toggleToBasket} setSinglePurchaseData={setSinglePurchaseData}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {toggleToBasket, plus, minus, setSinglePurchaseData})(BasketContainer);