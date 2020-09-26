//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Animated} from 'react-animated-css';
//styles
import styles from './ProductCell.module.scss';

//my components

interface IPropsTypes {
    title: string
    img: any
    path: string
    duration: number
}

export const ProductCell: React.FC<IPropsTypes> = ({title, img, path, duration}) => {
    return (
        <NavLink activeClassName={styles.active} to={path} className={styles.productCell}>
            <Animated animationIn="fadeIn" animationOut="bounceInLeft" animationInDuration={duration}
                      isVisible={true}>{img}</Animated>
            <p>{title}</p>
        </NavLink>
    )
};

