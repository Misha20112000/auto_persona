//other import
import React, {useState} from 'react';
import {Animated} from 'react-animated-css';
import {NavLink} from 'react-router-dom';
//images
import selfPickup from './../../../assets/img/other/selfPickup.jpg';
import courier from './../../../assets/img/other/courier.jpg';
import newPost from './../../../assets/img/other/newPost.jpg';
import ukrPost from './../../../assets/img/other/ukrPost.jpg';
//styles
import styles from './PaymentAndDelivery.module.scss';
//my components
import  DeliveryForm from './DeliveryForm/DeliveryForm';

interface IPropsTypes {
    clearBasket: () => void
    localization: string
}

export const PaymentAndDelivery: React.FC<IPropsTypes> = ({clearBasket, localization}) => {

    const [delivery, setDelivery] = useState('selfPickup');

    const clearBasketData = () => {
        if (localization === 'basket') {
            clearBasket();
        }
    };

    return (
        <div className={`${styles.PaymentAndDelivery} container`}>
            <div className={styles.title}><span>2</span>Виберіть спосіб доставки</div>
            <div className={styles.imgWrapper}>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1000} isVisible={true}>
                    <div><img onClick={() => setDelivery('selfPickup')}
                              className={delivery === 'selfPickup' ? styles.active : undefined} src={selfPickup}
                              alt=""/>Самовивіз
                    </div>
                </Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1200} isVisible={true}>
                    <div><img onClick={() => setDelivery('courier')}
                              className={delivery === 'courier' ? styles.active : undefined} src={courier} alt=""/>Кур'єр
                    </div>
                </Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1400} isVisible={true}>
                    <div><img onClick={() => setDelivery('newPost')}
                              className={delivery === 'newPost' ? styles.active : undefined} src={newPost} alt=""/>Нова
                        Пошта
                    </div>
                </Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1600} isVisible={true}>
                    <div><img onClick={() => setDelivery('ukrPost')}
                              className={delivery === 'uaPost' ? styles.active : undefined} src={ukrPost} alt=""/>Укр
                        Пошта
                    </div>
                </Animated>
            </div>
            <DeliveryForm delivery={delivery}/>
            <NavLink to='/gratitude' onClick={clearBasketData} className={styles.submit}>Підтвердити</NavLink>
        </div>
    )
};

