//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Animated} from 'react-animated-css';
//styles
import styles from './Menu.module.scss';
//my components
//types
import {AppStateType} from '../../../../redux/store';

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
    basketData: Array<IProductObject>
}

const Menu: React.FC<IPropsTypes> = ({basketData}) => {
    return (
        <nav className={styles.menu}>
            <ul>
                <Animated animationIn="fadeInDown" animationInDuration={300} animationOut="fadeOut" isVisible={true}><li><NavLink activeClassName={styles.active} to='/home'>Головна</NavLink></li></Animated>
                <Animated animationIn="fadeInDown" animationInDuration={600} animationOut="fadeOut" isVisible={true}><li><NavLink activeClassName={styles.active} to='/basket'>Корзина</NavLink></li></Animated>
                <Animated animationIn="fadeInDown" animationInDuration={900} animationOut="fadeOut" isVisible={true}><li><NavLink activeClassName={styles.active} to='/HBO_manufacturers'>Виробники ГБО</NavLink></li></Animated>
                <Animated animationIn="fadeInDown" animationInDuration={1200} animationOut="fadeOut" isVisible={true}><li><NavLink activeClassName={styles.active} to='/contacts'>Контакти</NavLink></li></Animated>
                {basketData.length > 0 ? <Animated  className={styles.number} animationIn="fadeInDown" animationInDuration={1200} animationOut="fadeOut" isVisible={true}><div>{basketData.length}</div></Animated> : null}
            </ul>
        </nav>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketData: state.basketReducer.basketData
    }
}

export default connect(mapStateToProps, {})(Menu);

