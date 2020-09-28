//other import
import React from 'react';
//styles
import styles from './Check.module.scss';

interface IPropsTypes {
    products: Array<IProductObject>
    minus: (id: string) => void
    plus: (id: string) => void
}

export const Check: React.FC<IPropsTypes> = ({products, minus, plus}) => {

    const productsAfterMap = products.map(productData => <tr key={productData.id}>
        <td>{productData.name}</td>
        <td>{productData.wantToBuy}
            <p onClick={() => productData.wantToBuy > 1 && minus(productData.id)}>-</p>
            <p onClick={() => productData.wantToBuy < productData.amount && plus(productData.id)}>+</p></td>
        <td>{productData.price}</td>
        <td>{productData.price * productData.wantToBuy}</td>
    </tr>)

    return (
        <>
            <div className={`${styles.check} container`}>
                <div className={styles.title}><span>1</span>Ваш чек</div>
                <table>
                    <tbody>
                    <tr>
                        <td>Назва товару</td>
                        <td>Вибрана к-сть</td>
                        <td>Ціна за шт.</td>
                        <td>Ціна за вибрану к-сть товару</td>
                    </tr>
                    {productsAfterMap}
                    </tbody>
                </table>
            </div>
        </>
    )
};