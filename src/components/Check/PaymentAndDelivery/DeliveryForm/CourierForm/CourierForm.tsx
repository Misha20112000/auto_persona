//other import
import React from 'react';
//styles
import styles from './CourierForm.module.scss';
//my components
import {PersonalDataInput} from '../../../../commonComponents/PersonalDataInput/PersonalDataInput';

interface IPropsTypes {
    name: string
    phoneNumber: string
    homeAddress: string
    changeName: (name: string) => void
    changePhoneNumber: (phoneNumber: string) => void
    changeHomeAddress: (homeAddress: string) => void
}

export const CourierForm:React.FC<IPropsTypes> = ({name, phoneNumber, homeAddress, changeName, changePhoneNumber, changeHomeAddress}) => {
    return (
        <>
            <PersonalDataInput changeValue={changeName} value={name} title='Як до вас звертатись?' placeholder="Введіть своє ім'я"/>
            <PersonalDataInput type='number' changeValue={changePhoneNumber} value={phoneNumber} title='Номер телефону?' placeholder="кажіть номер телефону"/>
            <PersonalDataInput changeValue={changeHomeAddress} value={homeAddress} title='Домашня адреса' placeholder="Вкажіть де ви живете"/>
        </>
    )
}