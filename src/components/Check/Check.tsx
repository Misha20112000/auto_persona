//other import
import React from 'react';
//styles
import styles from './Check.module.scss';

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
    products: Array<IProductObject>
    minus: (id: string) => void
    plus: (id: string) => void
}

export const Check: React.FC<IPropsTypes> = ({products, minus, plus}) => {

    const productsAfterMap = products.map(product => <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.wantToBuy}
            <p onClick={() => product.wantToBuy > 1 && minus(product.id)}>minus</p>
            <p onClick={() => product.wantToBuy < product.amount && plus(product.id)}>plus</p></td>
        <td>{product.price}</td>
        <td>{product.price * product.wantToBuy}</td>
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