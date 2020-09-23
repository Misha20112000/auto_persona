//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
//images
import star from '../../../assets/img/smallIcons/star.svg';
import emptyStar from '../../../assets/img/smallIcons/emptyStar.svg';
import dagger from '../../../assets/img/smallIcons/dagger.svg';
//styles
import styles1 from './ProductCard_1.module.scss';
import styles2 from './ProductCard_2.module.scss';
import styles3 from './ProductCard_3.module.scss';

//my components

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
    toggleToBasket: (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => void
    cardStyle: number
    plus?: (id: string) => void
    minus?: (id: string) => void
    setMoreDetailData?: (product: any) => void
    basketData: Array<IProductObject>
    activeTab?: number
    changeActiveTab?: (activeTab: number) => void
}

export const ProductCard: React.FC<IPropsTypes> = ({name, condition, rating, wantToBuy, imgs, comments, amount, producer, id, price, specialCharacteristics, toggleToBasket, cardStyle, plus, minus, setMoreDetailData, basketData, activeTab, changeActiveTab}) => {

    let stylesIf;
    switch (cardStyle) {
        case 2: {
            stylesIf = styles2;
            break;
        }
        case 3: {
            stylesIf = styles3;
            break;
        }
        default:
            stylesIf = styles1;
    }

    const toggleProductToBasket = () => {
        if (amount) {
            toggleToBasket(name, condition, rating, wantToBuy, imgs, comments, amount, producer, id, price, specialCharacteristics)
        } else {
            alert('Товару немає в наявності')
        }
    };

    const starsArray = [];

    for (let i = 0; i < rating; i++) {
        starsArray.push(i);
    }

    const startArrayAfterMap = starsArray.map(number => <img key={number} src={star} alt=""/>)

    const plusProduct = () => {
        if (wantToBuy < amount) {
            if (plus) {
                plus(id);
            }
        } else {
            alert('Неможлива операція.')
        }
    };

    const minusProduct = () => {
        if (wantToBuy > 1) {
            if (minus) {
                minus(id);
            }
        } else {
            alert('Неможлива операція.')
        }
    }

    const setMoreDetail = () => {
        if (setMoreDetailData) {
            setMoreDetailData({
                name,
                condition,
                rating,
                wantToBuy,
                imgs,
                comments,
                amount,
                producer,
                id,
                price,
                specialCharacteristics
            });
        }
    }

    const basketCondition = basketData.some(product => product.id === id);

    // @ts-ignore
    return (
        <div className={stylesIf.productCardWrapper}>

            <div className={stylesIf.productCard}>
                <img onClick={() => toggleProductToBasket()} className={stylesIf.dagger} src={dagger} alt=""/>
                <div className={stylesIf.buyZone}>
                    <div className={stylesIf.amount}>
                        <p className={stylesIf.title}>Кількість</p>
                        <span onClick={minusProduct} className={stylesIf.minus}> </span>
                        <span>{wantToBuy}</span>
                        <span onClick={plusProduct} className={stylesIf.plus}> </span>
                    </div>
                    <div className={stylesIf.price}>
                        {price}<span>грн</span>
                    </div>
                    <div className={stylesIf.totalPrice}>
                        Вартість за {wantToBuy}шт. - {price * wantToBuy}грн
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgs[0]})`}} className={stylesIf.bgImg}>
                    {condition === 'action' ? <div className={stylesIf.action}>Акція!</div> : null}
                </div>
                <div className={stylesIf.cardContent}>
                    <div className={stylesIf.name}>{name}</div>
                    <div className={stylesIf.stars}>
                        <div className={stylesIf.emptyStars}>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                            <img src={emptyStar} alt=""/>
                        </div>
                        <div className={stylesIf.fullStars}>
                            {startArrayAfterMap}
                        </div>
                    </div>
                    <div className={stylesIf.comment}>Залишити відгук</div>
                    {amount ? <div className={stylesIf.inStock}>В наявності {amount} шт.</div> :
                        <div className={stylesIf.havNot}>Зараз немає</div>}
                    <div className={stylesIf.producer}>Виробник: {producer}</div>
                    <div className={stylesIf.id}>Код товару: {id}</div>
                    <NavLink onClick={setMoreDetail} className={stylesIf.moreDetail}
                             to='/moreDetail'>Детальніше</NavLink>
                    <div className={stylesIf.price}>{price}<span>грн</span></div>

                    {!basketCondition
                        ?
                        <div onClick={toggleProductToBasket} className={stylesIf.inBasket}>
                            В корзину
                        </div>
                        :
                        <div onClick={toggleProductToBasket} className={stylesIf.outBasket}>
                            Викласти
                        </div>
                    }


                </div>

            </div>

            <div className={stylesIf.specialInfo}>
                <div className={stylesIf.tabs}>
                    <div onClick={() => changeActiveTab ? changeActiveTab(1) : null}
                         className={activeTab === 1 ? `${stylesIf.tab} ${stylesIf.active}` : `${stylesIf.tab}`}>
                        Опис
                    </div>
                    <div onClick={() => changeActiveTab ? changeActiveTab(2) : null}
                         className={activeTab === 2 ? `${stylesIf.tab} ${stylesIf.active}` : `${stylesIf.tab}`}>
                        Характеристики
                    </div>
                    <div onClick={() => changeActiveTab ? changeActiveTab(3) : null}
                         className={activeTab === 3 ? `${stylesIf.tab} ${stylesIf.active}` : `${stylesIf.tab}`}>
                        Відгуки
                    </div>
                </div>
                <div className={stylesIf.tabsInfo}>
                    {
                        activeTab === 1 && <div className={stylesIf.tabInformation}>
                            hello descr
                        </div>
                    }
                    {
                        activeTab === 2 && <div className={stylesIf.tabInformation}>
                            hello parameters
                        </div>
                    }
                    {
                        activeTab === 3 && <div className={stylesIf.tabInformation}>
                            hello comments
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

