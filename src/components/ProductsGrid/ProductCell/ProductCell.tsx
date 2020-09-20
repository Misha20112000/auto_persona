//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//styles
import styles from './ProductCell.module.scss';
//my components

interface IPropsTypes {
    title: string
    img: string
    path: string
}

export const ProductCell: React.FC<IPropsTypes> = ({title, img, path}) => {
    return (
        <NavLink activeClassName={styles.active} to={path} className={styles.productCell}>
            <img src={img} alt=""/>
            <p>{title}</p>
        </NavLink>
    )
};

