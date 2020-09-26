//other import
import React from 'react';
//styles
//my components
import {PersonalDataInput} from '../../../../commonComponents/PersonalDataInput/PersonalDataInput';

interface IPropsTypes {
    name: string
    phoneNumber: string
    email: string
    department: string
    changeName: (name: string) => void
    changePhoneNumber: (number: string) => void
    changeEmail: (email: string) => void
    changeDepartment: (department: string) => void
}

export const NewPostForm: React.FC<IPropsTypes> = ({name, phoneNumber, email, department,changeName,changePhoneNumber,changeEmail,changeDepartment}) => {
    return (
        <>
            <PersonalDataInput changeValue={changeName} value={name} title='Як до вас звертатись?' placeholder="Введіть своє ім'я"/>
            <PersonalDataInput type='number' changeValue={changePhoneNumber} value={phoneNumber} title='Номер телефону?' placeholder="Вкажіть свій номер телефону"/>
            <PersonalDataInput changeValue={changeEmail} value={email} title='Email' placeholder="_ _ _ _ _ _ _ _ _ _@gmail.com"/>
            <PersonalDataInput changeValue={changeDepartment} value={department} title='№ відділення' placeholder="Вкажіть номер відділення"/>
        </>
    )
}