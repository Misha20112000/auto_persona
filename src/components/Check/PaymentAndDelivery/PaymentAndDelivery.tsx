//other import
import React, {useState} from 'react';
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
                <div><img onClick={() => setDelivery('selfPickup')} className={ delivery === 'selfPickup' ? styles.active : undefined} src={selfPickup} alt=""/>Самовивіз</div>
                <div><img onClick={() => setDelivery('courier')} className={ delivery === 'courier' ? styles.active : undefined} src={courier} alt=""/>Кур'єр</div>
                <div><img onClick={() => setDelivery('newPost')} className={ delivery === 'newPost' ? styles.active : undefined} src={newPost} alt=""/>Нова Пошта</div>
                <div><img onClick={() => setDelivery('uaPost')} className={ delivery === 'uaPost' ? styles.active : undefined} src={uaPost} alt=""/>Укр Пошта</div>
            </div>
            {/*<Delivery/>*/}
        </div>
    )
};

