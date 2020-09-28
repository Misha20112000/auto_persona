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

interface IPropsTypes {
    basketDataLength: number
}

const Menu: React.FC<IPropsTypes> = ({basketDataLength}) => {
    return (
        <nav className={styles.navMenu}>
            <ul>
                <Animated animationIn="fadeInDown" animationInDuration={300} animationOut="fadeOut" isVisible={true}>
                    <li><NavLink activeClassName={styles.active} to='/home'>Головна</NavLink></li>
                </Animated>
                <Animated animationIn="fadeInDown" animationInDuration={600} animationOut="fadeOut" isVisible={true}>
                    <li>{basketDataLength
                        ? <Animated className={styles.basketQuantity} animationIn="fadeInDown" animationInDuration={1200}
                                  animationOut="fadeOut" isVisible={true}>{basketDataLength}</Animated> : null}
                        <NavLink activeClassName={styles.active} to='/basket'>Корзина</NavLink></li>
                </Animated>
                <Animated animationIn="fadeInDown" animationInDuration={900} animationOut="fadeOut" isVisible={true}>
                    <li><NavLink activeClassName={styles.active} to='/HBO_manufacturers'>Виробники ГБО</NavLink></li>
                </Animated>
                <Animated animationIn="fadeInDown" animationInDuration={1200} animationOut="fadeOut" isVisible={true}>
                    <li><NavLink activeClassName={styles.active} to='/contacts'>Контакти</NavLink></li>
                </Animated>
            </ul>
        </nav>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        basketDataLength: state.basketReducer.basketData.length
    }
}

export default connect(mapStateToProps, {})(Menu);

