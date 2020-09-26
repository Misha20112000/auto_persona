//other import
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//styles
import styles from './Check.module.scss';
//my components
import {Check} from './Check';
import {PaymentAndDelivery} from './PaymentAndDelivery/PaymentAndDelivery';
//func
import {clearBasket, minus, plus} from '../../redux/basketReducer';
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
    productsDataFromBasket: Array<IProductObject>
    productsDataSinglePurchase: IProductObject
    clearBasket: () => void
    minus: (id: string) => void
    plus: (id: string) => void
    match: {
        isExact: boolean
        path: string
        url: string
        params: {
            localization: string;
            category: string
        }
    }
}


const CheckContainer: React.FC<IPropsTypes> = ({productsDataFromBasket, clearBasket, match, productsDataSinglePurchase, minus, plus}) => {
    let products;

    if (match.params.localization === 'singlePurchase') {
        products = [{...productsDataSinglePurchase}];
    } else {
        products = productsDataFromBasket;
    }

    const priceArray = products.map(product => product.price * product.wantToBuy);

    let sum;
    const arraySum = (priceArray: string | any[]) => {
        sum = 0;
        for (let i = 0; i < priceArray.length; i++) {
            sum += priceArray[i];
        }
    }
    arraySum(priceArray);

    return (
        <>
            <Check products={products} minus={minus} plus={plus}/>
            <div className={styles.fullPrice}>Разом до сплати: {sum}грн</div>
            <PaymentAndDelivery localization={match.params.localization} clearBasket={clearBasket}/>
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        productsDataFromBasket: state.basketReducer.basketData,
        productsDataSinglePurchase: state.moreDetailReducer.moreDetailData,

        name: state.personalDataReducer.name,
        phoneNumber: state.personalDataReducer.phoneNumber,
        email: state.personalDataReducer.email,
        department: state.personalDataReducer.department,
        homeAddress: state.personalDataReducer.homeAddress,
    }
}

// @ts-ignore
export default connect(mapStateToProps, {clearBasket, minus, plus})(withRouter(CheckContainer));