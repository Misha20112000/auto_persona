//other import
import React from 'react';
//images
import first from '../../assets/img/productsGridImg/first.svg';
import second from '../../assets/img/productsGridImg/second.svg';
import third from '../../assets/img/productsGridImg/third.svg';
import fourth from '../../assets/img/productsGridImg/fourth.svg';
import fifth from '../../assets/img/productsGridImg/fifth.svg';
import sixth from '../../assets/img/productsGridImg/sixth.svg';
import seventh from '../../assets/img/productsGridImg/seventh.svg';
import eighth from '../../assets/img/productsGridImg/eighth.svg';
import ninth from '../../assets/img/productsGridImg/ninth.svg';
import tenth from '../../assets/img/productsGridImg/tenth.svg';
//styles
import styles from './ProductsGrid.module.scss';
//my components
import {ProductCell} from './ProductCell/ProductCell';

export const ProductsGrid = () => {

    const productCells = [
        {title: 'Комплекти ГБО', img: first, path: '/products/GBO_kits'},
        {title: 'Інжекторні системи (електроніка)', img: second, path: '/products/injection_systems'},
        {title: 'Газові редуктори та комплектуючі', img: third, path: '/products/gas_reducers_&_accessories'},
        {title: 'Форсунки', img: fourth, path: '/products/nozzles'},
        {title: 'Фільтри', img: fifth, path: '/products/filters'},
        {title: 'Електроніка, клапана газу і бензину', img: sixth, path: '/products/electronics,gas&gasoline_valves'},
        {title: 'Трубки, шланги та комплектуючі', img: seventh, path: '/products/tubes,hoses&accessories'},
        {title: 'Балони, арматура, кріплення і ВЗУ', img: eighth, path: '/products/cylinders,fittings,mounts&HEIs'},
        {title: 'Дозатори газу, змішувачі та антихлопки', img: ninth, path: '/products/gas_dispensers,mixers&anti-slap'},
        {title: 'Устаткування для СТО, захисні рідини', img: tenth, path: '/products/equipment_for_service_stations,protective_liquids'},
    ];

    const productCellsAfterMap = productCells.map(cell => <ProductCell key={cell.title} {...cell}/>);

    return (
        <div className={`${styles.productsGrid} container`}>
            {productCellsAfterMap}
        </div>
    )
};

