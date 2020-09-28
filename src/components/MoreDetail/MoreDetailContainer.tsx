//other import
import React from 'react';
import {connect} from 'react-redux';
//my components
import {MoreDetail} from './MoreDetail';
//func
import {setSinglePurchaseData} from '../../redux/singlePurchaseReducer';
import {toggleToBasket} from '../../redux/basketReducer';
import {changeActiveTab} from '../../redux/productsReducer';
//types
import {AppStateType} from "../../redux/store";

interface IPropsTypes {
    singlePurchaseData: IProductObject
    basketData: Array<IProductObject>
    setSinglePurchaseData: (product: IProductObject) => void
    toggleToBasket: (product: IProductObject) => void
    activeTab: number
    changeActiveTab: (activeTab: number) => void
}

const MoreDetailContainer:React.FC<IPropsTypes> = ({singlePurchaseData, basketData, setSinglePurchaseData, toggleToBasket, activeTab, changeActiveTab}) => {
    return <MoreDetail singlePurchaseData={singlePurchaseData} basketData={basketData} setSinglePurchaseData={setSinglePurchaseData} toggleToBasket={toggleToBasket} activeTab={activeTab} changeActiveTab={changeActiveTab}/>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        singlePurchaseData: state.singlePurchaseReducer.singlePurchaseData,
        basketData: state.basketReducer.basketData,
        activeTab: state.productsReducer.activeTab,
    }
}

export default connect(mapStateToProps, {setSinglePurchaseData, toggleToBasket, changeActiveTab})(MoreDetailContainer);


