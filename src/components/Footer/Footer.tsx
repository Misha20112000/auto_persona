//other import
import React from 'react';
//styles
import styles from './Footer.module.scss';
//my components
import {Map} from './Map/Map';
import {FooterContacts} from './FooterContacts/FooterContacts';

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <footer className={`${styles.footer} container`}>
                <Map/>
                <FooterContacts/>
            </footer>
        </div>
    )
};

