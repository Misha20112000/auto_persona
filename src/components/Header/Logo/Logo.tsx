//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//images
import logo from '../../../assets/img/smallIcons/logo.svg';
//styles
// import styles from './Logo.module.scss';
//my components

export const Logo = () => {
    return (
        <NavLink to='/home'>
            <img src={logo} alt=""/>
        </NavLink>
    )
};

