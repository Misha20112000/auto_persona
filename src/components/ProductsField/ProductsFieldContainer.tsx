//other import
import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
//import axios from 'axios';
//my components
import {ProductsField} from './ProductsField';
//my func
import {setProducts} from '../../redux/productsReducer';
import {toggleToBasket} from '../../redux/basketReducer';
import {setSinglePurchaseData} from '../../redux/singlePurchaseReducer';
//types
import {AppStateType} from '../../redux/store';
//fakeDatabase
import {productsDataFromServ} from '../../fakeDatabase/fakeDatabase';

interface IPropsTypes {
    match: {
        isExact: boolean
        path: string
        url: string
        params: {
            category: string
        }
    }
    setProducts: (productsData: Array<IProductObject>) => void
    productsData: Array<IProductObject>
    basketData: Array<IProductObject>
    toggleToBasket: (product: IProductObject) => void
    setSinglePurchaseData: (product: IProductObject) => void
}

const ProductsFieldContainer: React.FC<IPropsTypes & RouteComponentProps> = ({match, setProducts, productsData, basketData, toggleToBasket, setSinglePurchaseData}) => {
    /* Ф-ція, що робить запит на сервер за товаром при рендері і сетає відповідь в productsReducer */
    useEffect(() => {
        /* Шаблон запиту на сервер
            axios.get('http://google.com').then(response => {
                setProducts(response.data);
            });
        */

        /* Імітація взаємодії з сервером */
        switch (match.params.category) {
            case 'GBO_kits': {
                setProducts(productsDataFromServ.GBO_kitsData);
                break;
            }
            case 'injection_systems': {
                setProducts(productsDataFromServ.injection_systemsData);
                break;
            }
            case 'gas_reducers_&_accessories': {
                setProducts(productsDataFromServ.gas_reducers_and_accessoriesData);
                break;
            }
            case 'nozzles': {
                setProducts(productsDataFromServ.nozzlesData);
                break;
            }
            case 'filters': {
                setProducts(productsDataFromServ.filtersData);
                break;
            }
            case 'electronics,gas&gasoline_valves': {
                setProducts(productsDataFromServ.electronicsGasAndGasolineValves);
                break;
            }
            case 'tubes,hoses&accessories': {
                setProducts(productsDataFromServ.tubesHosesAndAccessories);
                break;
            }
            case 'cylinders,fittings,mounts&HEIs': {
                setProducts(productsDataFromServ.cylindersFittingsMounts);
                break;
            }
            case 'gas_dispensers,mixers&anti-slap': {
                setProducts(productsDataFromServ.gas_dispensersMixersAntiSlap);
                break;
            }
            case 'equipment_for_service_stations,protective_liquids': {
                setProducts(productsDataFromServ.equipment_for_service_stationsProtective_liquids);
                break;
            }
            default:
                setProducts([]);
        }
    }, [match.params.category, setProducts]);

    return <ProductsField productsData={productsData} basketData={basketData} toggleToBasket={toggleToBasket} setSinglePurchaseData={setSinglePurchaseData}/>
};

const mapStateToProps = (state: AppStateType) => {
    return {
        productsData: state.productsReducer.productsData,
        basketData: state.basketReducer.basketData,
    }
};

// @ts-ignore
export default connect(mapStateToProps, {setProducts, toggleToBasket, setSinglePurchaseData})(withRouter(ProductsFieldContainer));

