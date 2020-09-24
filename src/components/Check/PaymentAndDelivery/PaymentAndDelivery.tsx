//other import
import React, {useState} from 'react';
import {Animated} from 'react-animated-css';
//images
import selfPickup from './../../../assets/img/other/selfPickup.jpg';
import courier from './../../../assets/img/other/courier.jpg';
import newPost from './../../../assets/img/other/newPost.jpg';
import uaPost from './../../../assets/img/other/uaPost.jpg';
//styles
import styles from './PaymentAndDelivery.module.scss';

export const PaymentAndDelivery = () => {

    const [delivery, setDelivery] = useState('selfPickup');

    return (
        <div className={`${styles.PaymentAndDelivery} container`}>
            <div className={styles.title}>Виберіть спосіб доставки</div>
            <div className={styles.imgWrapper}>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1000} isVisible={true}><div><img onClick={() => setDelivery('selfPickup')} className={ delivery === 'selfPickup' ? styles.active : undefined} src={selfPickup} alt=""/>Самовивіз</div></Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1200} isVisible={true}><div><img onClick={() => setDelivery('courier')} className={ delivery === 'courier' ? styles.active : undefined} src={courier} alt=""/>Кур'єр</div></Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1400} isVisible={true}><div><img onClick={() => setDelivery('newPost')} className={ delivery === 'newPost' ? styles.active : undefined} src={newPost} alt=""/>Нова Пошта</div></Animated>
                <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={1600} isVisible={true}><div><img onClick={() => setDelivery('uaPost')} className={ delivery === 'uaPost' ? styles.active : undefined} src={uaPost} alt=""/>Укр Пошта</div></Animated>
            </div>
            {/*<Delivery/>*/}
        </div>
    )
};

