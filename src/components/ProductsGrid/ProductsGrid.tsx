//other import
import React from 'react';
//images
import logo from '../../assets/img/smallIcons/logo.svg';
import nozzles from '../../assets/img/productsGridImg/nozzles.svg';
//styles
import styles from './ProductsGrid.module.scss';
//my components
import {ProductCell} from './ProductCell/ProductCell';

export const ProductsGrid = () => {

    const productCells = [
        {title: 'Комплекти ГБО', img: logo, path: '/products/GBO_kits'},
        {title: 'Інжекторні системи (електроніка)', img: logo, path: '/products/injection_systems'},
        {title: 'Газові редуктори та комплектуючі', img: logo, path: '/products/gas_reducers_&_accessories'},
        {title: 'Форсунки', img: nozzles, path: '/products/nozzles'},
        {title: 'Фільтри', img: logo, path: '/products/filters'},
        {title: 'Електроніка, клапана газу і бензину', img: logo, path: '/products/electronics,gas&gasoline_valves'},
        {title: 'Трубки, шланги та комплектуючі', img: logo, path: '/products/tubes,hoses&accessories'},
        {title: 'Балони, арматура, кріплення і ВЗУ', img: logo, path: '/products/cylinders,fittings,mounts&HEIs'},
        {title: 'Дозатори газу, змішувачі та антихлопки', img: logo, path: '/products/gas_dispensers,mixers&anti-slap'},
        {title: 'Устаткування для СТО, захисні рідини', img: logo, path: '/products/equipment_for_service_stations,protective_liquids'},
    ];

    const productCellsAfterMap = productCells.map(cell => <ProductCell key={cell.title} {...cell}/>);

    return (
        <div className={`${styles.productsGrid} container`}>
            {productCellsAfterMap}
        </div>
    )
};

