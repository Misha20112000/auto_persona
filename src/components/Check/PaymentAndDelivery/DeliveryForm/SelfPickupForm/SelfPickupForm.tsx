//other import
import React from 'react';
//styles
import styles from './SelfPickupForm.module.scss';
//my components
import {PersonalDataInput} from '../../../../commonComponents/PersonalDataInput/PersonalDataInput';

interface IPropsTypes {
    name: string
    phoneNumber: string
    changeName: (name: string) => void
    changePhoneNumber: (phoneNumber: string) => void
}

export const SelfPickupForm:React.FC<IPropsTypes> = ({name, phoneNumber, changeName, changePhoneNumber}) => {
    return (
        <>
            <PersonalDataInput changeValue={changeName} value={name} title='Як до вас звертатись?' placeholder="Введіть своє ім'я"/>
            <PersonalDataInput type='number' changeValue={changePhoneNumber} value={phoneNumber} title='Номер телефону?' placeholder="Введіть номер телефону"/>
        </>
    )
}