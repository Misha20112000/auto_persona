//other import
import React from 'react';
//styles
import styles from './Map.module.scss';
//my components

export const Map = () => {
    return (
        <div className={styles.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.729897922345!2d24.06912291780539!3d49.79114410273888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae8402de2d96d%3A0x50b2599986a64f3c!2z0YPQuy4g0JjQstCw0L3QsCDQmtCw0LLQsNC70LXRgNC40LTQt9C1LCAxOSwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1600941636145!5m2!1sru!2sua"
                width="100%" height="100%" frameBorder="0" style={{border: 0, borderRadius: 3}}>
            </iframe>
        </div>
    )
};

