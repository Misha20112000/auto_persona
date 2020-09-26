//other import
import React from 'react';
import {Animated} from 'react-animated-css';
//styles
import styles from './PersonalDataInput.module.scss';
//my components

interface IPropsTypes {
    title: string
    placeholder: string
    value: string
    changeValue: (newValue: string) => void
    type?: string
}

export const PersonalDataInput: React.FC<IPropsTypes> = ({title, placeholder, value, changeValue, type}) => {
    return (
        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOut="fadeOut" isVisible={true} className={styles.personalDataInput}>
            <p>{title}</p>
            <input type={type} onChange={(e) => changeValue(e.target.value)} value={value} placeholder={placeholder}/>
        </Animated>
    )
};

