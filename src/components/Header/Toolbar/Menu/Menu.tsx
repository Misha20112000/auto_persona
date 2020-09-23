//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
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
                <li><NavLink activeClassName={styles.active} to='/home'>Головна</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/basket'>Корзина</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/HBO_manufacturers'>Виробники ГБО</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/contacts'>Контакти</NavLink></li>
                {basketData.length > 0 ? <div className={styles.number}>{basketData.length}</div> : null}
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

