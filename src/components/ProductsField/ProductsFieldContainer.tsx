//other import
import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
//import axios from 'axios';
//my components
import {ProductsField} from './ProductsField';
//my func
import {setProducts} from '../../redux/productsReducer';
//types
import {AppStateType} from '../../redux/store';

interface IPropsTypes {
    match: {
        isExact: boolean
        path: string
        url: string
        params: {
            category: string
        }
    }
    setProducts: (productsData: Array<object>) => void
    productsData: Array<object>
}

const ProductsFieldContainer: React.FC<IPropsTypes & RouteComponentProps> = ({match, setProducts, productsData}) => {

    useEffect(() => {
        //axios.get('http://').then(response => {
        //  setProducts(response.data);
        //});
        setProducts([
            {}, {}
        ]);
    }, [match.params.category]);

    return <ProductsField productsData={productsData}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        productsData: state.productsReducer.productsData,
    }
};

export default connect(mapStateToProps, {setProducts})(withRouter(ProductsFieldContainer));

