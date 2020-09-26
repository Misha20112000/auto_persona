//other import
import React from 'react';
import {Route} from 'react-router-dom';
//styles
import styles from './App.module.scss';
//my components
import {Header} from './Header/Header';
import {SearchField} from './SearchField/SearchField';
import {ProductsGrid} from './ProductsGrid/ProductsGrid';
import {Footer} from './Footer/Footer';
import ProductsFieldContainer from './ProductsField/ProductsFieldContainer';
import BasketContainer from './Basket/BasketContainer';
import CheckContainer from './Check/CheckContainer';
import MoreDetailContainer from './MoreDetail/MoreDetailContainer';
import {Gratitude} from './Gratitude/Gratitude';

export const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.eclipse}> </div>
            <div className={styles.content}>
                <Header/>
                <SearchField/>
                <ProductsGrid/>
                <Route path='/products/:category' render={() => <ProductsFieldContainer/>}/>
                <Route path='/basket' render={() => <BasketContainer/>}/>
                <Route path='/check/:localization?' render={() => <CheckContainer/>}/>
                <Route path='/moreDetail' render={() => <MoreDetailContainer/>}/>
                <Route path='/gratitude' render={() => <Gratitude/>}/>
                <Footer/>
            </div>
        </div>
    )
};

