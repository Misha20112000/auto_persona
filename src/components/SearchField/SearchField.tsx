//other import
import React from 'react';
//styles
import styles from './SearchField.module.scss';
//my components

export const SearchField = () => {
    return (
        <div className={`${styles.searchField} container`}>
            <input placeholder='Пошук по назві/коду товару:' type="text"/>
            <button>Найти</button>
        </div>
    )
};

