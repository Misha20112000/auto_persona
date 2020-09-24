//other import
import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
//import axios from 'axios';
//images
import mainImg from './../../assets/img/other/goldSkull.jpg';
//my components
import ProductsField from './ProductsField';
//my func
import {setProducts} from '../../redux/productsReducer';
import {setMoreDetailData} from '../../redux/moreDetailReducer';
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
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const injection_systemsData = [
    {
        name: 'Інжекторна система №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Інжекторна система №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Інжекторна система №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Інжекторна система №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const gas_reducers_and_accessoriesData = [
    {
        name: 'Газовий редуктор №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Газовий редуктор №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Газовий редуктор №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Газовий редуктор №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const nozzlesData = [
    {
        name: 'Форсунки №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Форсунки №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Форсунки №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Форсунки №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const filtersData = [
    {
        name: 'Фільтер №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Фільтер №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Фільтер №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Фільтер №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const electronicsGasAndGasolineValves = [
    {
        name: 'Клапан газу №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Клапан газу №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Клапан газу №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Клапан газу №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const tubesHosesAndAccessories = [
    {
        name: 'Трубка №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Трубка №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Трубка №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Трубка №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const cylindersFittingsMounts = [
    {
        name: 'Балон №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Балон №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Балон №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Балон №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const gas_dispensersMixersAntiSlap = [
    {
        name: 'Дозатор газу №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Дозатор газу №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Дозатор газу №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Дозатор газу №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
        price: 76,
        specialCharacteristics: {}
    },
];
const equipment_for_service_stationsProtective_liquids = [
    {
        name: 'Устаткування №1',
        condition: 'action',
        rating: 1,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (1)'],
        amount: 19,
        producer: 'producer 1',
        id: uuidv4(),
        price: 10190,
        specialCharacteristics: {}
    },
    {
        name: 'Устаткування №2',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (2)'],
        amount: 819,
        producer: 'producer 2',
        id: uuidv4(),
        price: 14,
        specialCharacteristics: {}
    },
    {
        name: 'Устаткування №3',
        condition: 'action',
        rating: 3,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (3)'],
        amount: 0,
        producer: 'producer 3',
        id: uuidv4(),
        price: 27,
        specialCharacteristics: {}
    },
    {
        name: 'Устаткування №4',
        condition: '',
        rating: 4,
        wantToBuy: 1,
        imgs: [mainImg],
        comments: ['good GBO product (4)'],
        amount: 45,
        producer: 'producer 4',
        id: uuidv4(),
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
    setMoreDetailData: (product: any) => void
    productsData: Array<IProductObject>
}

const ProductsFieldContainer: React.FC<IPropsTypes & RouteComponentProps> = ({match, setProducts, productsData, setMoreDetailData}) => {
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
                setProducts(injection_systemsData);
                break;
            }
            case 'gas_reducers_&_accessories': {
                setProducts(gas_reducers_and_accessoriesData);
                break;
            }
            case 'nozzles': {
                setProducts(nozzlesData);
                break;
            }
            case 'filters': {
                setProducts(filtersData);
                break;
            }
            case 'electronics,gas&gasoline_valves': {
                setProducts(electronicsGasAndGasolineValves);
                break;
            }
            case 'tubes,hoses&accessories': {
                setProducts(tubesHosesAndAccessories);
                break;
            }
            case 'cylinders,fittings,mounts&HEIs': {
                setProducts(cylindersFittingsMounts);
                break;
            }
            case 'gas_dispensers,mixers&anti-slap': {
                setProducts(gas_dispensersMixersAntiSlap);
                break;
            }
            case 'equipment_for_service_stations,protective_liquids': {
                setProducts(equipment_for_service_stationsProtective_liquids);
                break;
            }
            default:
                setProducts([{}]);
        }
    }, [match.params.category]);

    return <ProductsField productsData={productsData} setMoreDetailData={setMoreDetailData}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        productsData: state.productsReducer.productsData,
    }
};

export default connect(mapStateToProps, {setProducts, setMoreDetailData})(withRouter(ProductsFieldContainer));

