//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Animated} from 'react-animated-css';
//styles
import styles from './ProductCell.module.scss';

interface IPropsTypes {
    title: string
    img: any
    path: string
    duration: number
}

export const ProductCell: React.FC<IPropsTypes> = ({title, img, path, duration}) => {
    return (
        <Animated className={styles.productCellWrapper} animationIn="zoomInDown" animationOut="bounceInLeft" animationInDuration={duration}
                  isVisible={true}>
            <NavLink className={styles.productCell} activeClassName={styles.active} to={path}>
                <div className={styles.img}>{img}</div>
                <p>{title}</p>
            </NavLink>
        </Animated>
    )
};

