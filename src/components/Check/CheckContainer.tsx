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
import {minusSP, plusSP} from '../../redux/singlePurchaseReducer';
//types
import {AppStateType} from '../../redux/store';

interface IPropsTypes {
    basketData: Array<IProductObject>
    clearBasket: () => void
    minus: (id: string) => void
    plus: (id: string) => void
    minusSP: (id: string) => void
    plusSP: (id: string) => void
    match: {
        isExact: boolean
        path: string
        url: string
        params: {
            localization: string;
            category: string
        }
    }
    singlePurchaseData: IProductObject
}


const CheckContainer: React.FC<IPropsTypes> = ({basketData, clearBasket, match, minus, plus, singlePurchaseData, minusSP, plusSP}) => {
    let products: any[];
    let plusGlobal: (id: string) => void;
    let minusGlobal: (id: string) => void;

    if (match.params.localization === 'singlePurchase') {
        products = [{...singlePurchaseData}];
        plusGlobal = plusSP
        minusGlobal = minusSP
    } else {
        products = basketData;
        plusGlobal = plus
        minusGlobal = minus
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
            <Check products={products} minus={minusGlobal} plus={plusGlobal}/>
            <div className={styles.fullPrice}>Разом до сплати: {sum}грн</div>
            <PaymentAndDelivery localization={match.params.localization} clearBasket={clearBasket}/>
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData,
        singlePurchaseData: state.singlePurchaseReducer.singlePurchaseData,

        name: state.personalDataReducer.name,
        phoneNumber: state.personalDataReducer.phoneNumber,
        email: state.personalDataReducer.email,
        department: state.personalDataReducer.department,
        homeAddress: state.personalDataReducer.homeAddress,
    }
}

// @ts-ignore
export default connect(mapStateToProps, {clearBasket, minus, plus, minusSP, plusSP})(withRouter(CheckContainer));