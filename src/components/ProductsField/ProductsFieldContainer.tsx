//other import
import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
//import axios from 'axios';
//images
import mainImg from './../../assets/img/other/goldSkull.jpg';
//my components
import ProductsField from './ProductsField';
//my func
import {setProducts} from '../../redux/productsReducer';
//types
import {AppStateType} from '../../redux/store';

const GBO_kitsData = [
    {
        name: 'Коромисло другої ступені редуктора Atiker VR01, VR02, Коромисло другої ступені редуктора Atiker VR01, VR02',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: '1028-2931-7219',
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'GBO product 2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: '1128-9941-6229',
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'GBO product 3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: '1608-2431-7515',
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'GBO product 4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: '9928-8931-7669',
        price: 76,
        specialCharacteristics: {}
    },
];

interface IProductObject {
    name: string
    condition: string
    rating: number
    wantToBuy: number
    inBasket: boolean
    imgs: Array<string>
    comments: Array<string>
    amount: number
    producer: string
    id: string
    price: number
    specialCharacteristics: object
}

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
    productsData: Array<IProductObject>
}

const ProductsFieldContainer: React.FC<IPropsTypes & RouteComponentProps> = ({match, setProducts, productsData}) => {
    useEffect(() => {
        //axios.get('http://').then(response => {
        //  setProducts(response.data);
        //});
        switch (match.params.category) {
            case 'GBO_kits': {
                setProducts(GBO_kitsData);
                break;
            }
            case 'injection_systems': {
                setProducts([]);
                break;
            }
            default: setProducts([{}]);
        }
    }, [match.params.category]);

    return <ProductsField productsData={productsData}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        productsData: state.productsReducer.productsData,
    }
};

export default connect(mapStateToProps, {setProducts})(withRouter(ProductsFieldContainer));

