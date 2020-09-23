//other import
import React from 'react';
import {connect} from 'react-redux';
//styles
//my components
import {MoreDetail} from './MoreDetail';
//func
import {toggleToBasket} from '../../redux/basketReducer';
import {changeActiveTab} from '../../redux/productsReducer';
//types
import {AppStateType} from '../../redux/store';

interface IProductObj {
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
    moreDetailData: IProductObj
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    basketData: Array<IProductObj>
    activeTab: number
    changeActiveTab: (activeTab: number) => void
}

const MoreDetailContainer: React.FC<IPropsTypes> = ({moreDetailData, toggleToBasket, basketData, activeTab, changeActiveTab}) => {
    return <MoreDetail moreDetailData={moreDetailData} toggleToBasket={toggleToBasket} basketData={basketData} activeTab={activeTab} changeActiveTab={changeActiveTab}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        moreDetailData: state.moreDetailReducer.moreDetailData,
        basketData: state.basketReducer.basketData,
        activeTab: state.productsReducer.activeTab
    }
}

export default connect(mapStateToProps, {toggleToBasket ,changeActiveTab})(MoreDetailContainer);