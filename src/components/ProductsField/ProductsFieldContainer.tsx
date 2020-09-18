//other import
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
//my components
import {ProductsField} from './ProductsField';

interface IPropsTypes {
    match: {
        isExact: boolean
        path: string
        url: string
        params: {
            category: string
        }
    }
}

const ProductsFieldContainer: React.FC<IPropsTypes> = ({match}) => {

    useEffect(() => {
        // axios.get('http://...').then(response => {
        //     setProducts(response.data);
        // });
    }, [match.params.category]);

    return <ProductsField/>
};

export default withRouter(ProductsFieldContainer);

