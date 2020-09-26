//other import
import React from 'react';
import {connect} from 'react-redux';
//styles
import styles from './DeliveryFrom.module.scss';
//my components
import {SelfPickupForm} from './SelfPickupForm/SelfPickupForm';
import {CourierForm} from './CourierForm/CourierForm';
import {NewPostForm} from './NewPostForm/NewPostForm';
import {UkrPostForm} from './UkrPostForm/UkrPostForm';
//types
import {AppStateType} from '../../../../redux/store';
//func
import {
    changeDepartment,
    changeEmail,
    changeHomeAddress,
    changeName,
    changePhoneNumber
} from '../../../../redux/personalDataReducer';

interface IPropsTypes {
    delivery: string
    name: string
    phoneNumber: string
    homeAddress: string
    email: string
    department: string
    changeName: (name: string) => void
    changePhoneNumber: (phoneNumber: string) => void
    changeHomeAddress: (homeAddress: string) => void
    changeEmail: (email: string) => void
    changeDepartment: (department: string) => void
}

const DeliveryForm: React.FC<IPropsTypes> = ({delivery, name, phoneNumber, homeAddress, email, department, changeName, changePhoneNumber, changeHomeAddress, changeEmail, changeDepartment}) => {
    return (
        <div className={styles.deliveryForm}>
            <div className={styles.title}><span>3</span>Персональні данні</div>
            {delivery === 'selfPickup' ? <SelfPickupForm changeName={changeName} changePhoneNumber={changePhoneNumber} name={name} phoneNumber={phoneNumber}/>
                : delivery === 'courier' ? <CourierForm changeName={changeName} changePhoneNumber={changePhoneNumber} changeHomeAddress={changeHomeAddress} name={name} phoneNumber={phoneNumber} homeAddress={homeAddress}/>
                    : delivery === 'newPost' ? <NewPostForm changeName={changeName} changePhoneNumber={changePhoneNumber} changeEmail={changeEmail} changeDepartment={changeDepartment} name={name} phoneNumber={phoneNumber} email={email} department={department}/>
                        : delivery === 'ukrPost' ? <UkrPostForm changeName={changeName} changePhoneNumber={changePhoneNumber} changeEmail={changeEmail} changeDepartment={changeDepartment} name={name} phoneNumber={phoneNumber} email={email} department={department}/> : null}
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        name: state.personalDataReducer.name,
        phoneNumber: state.personalDataReducer.phoneNumber,
        homeAddress: state.personalDataReducer.homeAddress,
        email: state.personalDataReducer.email,
        department: state.personalDataReducer.department,
    }
}

export default connect(mapStateToProps, {changeName, changePhoneNumber, changeHomeAddress, changeEmail, changeDepartment})(DeliveryForm);