//other import
import React from 'react';
import {connect} from 'react-redux';
//styles
import styles from './Check.module.scss';
//my components
import {Check} from './Check';
import {PaymentAndDelivery} from './PaymentAndDelivery/PaymentAndDelivery';
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
    products: Array<IProductObject>
}


const CheckContainer: React.FC<IPropsTypes> = ({products}) => {

    const priceArray = products.map(product => product.price * product.wantToBuy);

    let sum;
    const arraySum = (priceArray: string | any[]) => {
        sum = 0;
        for(let i = 0; i < priceArray.length; i++){
            sum += priceArray[i];
        }
    }
    arraySum(priceArray);

    return (
        <>
            <Check products={products}/>
            <div className={styles.fullPrice}>Разом до сплати: {sum}грн</div>
            <PaymentAndDelivery/>
        </>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        products: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {})(CheckContainer);