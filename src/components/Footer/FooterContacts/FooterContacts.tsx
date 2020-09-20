//other import
import React from 'react';
//images
import viber from '../../../assets/img/socialNetworkImg/viber.svg';
import facebook from '../../../assets/img/socialNetworkImg/facebook.svg';
import instagram from '../../../assets/img/socialNetworkImg/instagram.svg';
import telegram from '../../../assets/img/socialNetworkImg/telegram.svg';
import whatsApp from '../../../assets/img/socialNetworkImg/whatsApp.svg';
import copyright from '../../../assets/img/smallIcons/copyright.svg';
//styles
import styles from './FooterContacts.module.scss';
//my components

export const FooterContacts = () => {
    return (
        <div className={styles.footerContacts}>
            <p className={styles.socNet}>
                <span>Адреса:</span><span>Кавалерідзе 19</span>
            </p>
            <p className={styles.socNet}>
                <span>Контакти:</span><span>0970842873, 0671748990</span>
            </p>
            <p className={styles.socNet}>
                <span>Ми у соц. мережах:</span>
                <span><img src={viber} alt=""/></span>
                <span><img src={facebook} alt=""/></span>
                <span><img src={instagram} alt=""/></span>
                <span><img src={telegram} alt=""/></span>
                <span><img src={whatsApp} alt=""/></span>
            </p>
            <p className={`${styles.copyright} ${styles.socNet}`}>
                <span><img src={copyright} alt=""/></span>
                <span>Copyright 2010-2020 Autopersona</span>
            </p>
        </div>
    )
};

