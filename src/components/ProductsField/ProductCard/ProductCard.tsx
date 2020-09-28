//other import
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Animated} from 'react-animated-css';
//images
import star from '../../../assets/img/smallIcons/star.svg';
import emptyStar from '../../../assets/img/smallIcons/emptyStar.svg';
import dagger from '../../../assets/img/smallIcons/dagger.svg';
//styles
import styles1 from './ProductCard_1.module.scss';
import styles2 from './ProductCard_2.module.scss';
import styles3 from './ProductCard_3.module.scss';

//my components

interface IPropsTypes {
    productData: IProductObject
    toggleToBasket: (product: IProductObject) => void
    cardStyle: number
    plus?: (id: string) => void
    minus?: (id: string) => void
    basketData: Array<IProductObject>
    activeTab?: number
    changeActiveTab?: (activeTab: number) => void
    setSinglePurchaseData: (product: IProductObject) => void
}

export const ProductCard: React.FC<IPropsTypes> = ({productData, toggleToBasket, cardStyle, plus, minus, basketData, activeTab, changeActiveTab, setSinglePurchaseData}) => {

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
        if (productData.amount) {
            toggleToBasket(productData)
        }
    };

    const starsArray = [];

    for (let i = 0; i < productData.rating; i++) {
        starsArray.push(i);
    }

    const startArrayAfterMap = starsArray.map(number => <img key={number} src={star} alt=""/>)

    const plusProduct = () => {
        if (productData.wantToBuy < productData.amount) {
            if (plus) {
                plus(productData.id);
            }
        } else {
            alert('Неможлива операція.')
        }
    };

    const minusProduct = () => {
        if (productData.wantToBuy > 1) {
            if (minus) {
                minus(productData.id);
            }
        } else {
            alert('Неможлива операція.')
        }
    }

    const setSinglePurchaseDataLocal = () => {
        setSinglePurchaseData(productData)
    }

    const basketCondition = basketData.some(productFromBasket => productFromBasket.id === productData.id);
    // @ts-ignore
    return (
        <Animated animationIn="zoomIn" animationOut="bounce" animationOutDuration={2000} isVisible={true}
                  className={stylesIf.productCardWrapper}>
            <div className={stylesIf.productCard}>
                <img onClick={() => toggleProductToBasket()} className={stylesIf.dagger} src={dagger} alt=""/>
                <div className={stylesIf.buyZone}>
                    <div className={stylesIf.amount}>
                        <p className={stylesIf.title}>Кількість</p>
                        <span onClick={minusProduct} className={stylesIf.minus}> </span>
                        <span>{productData.wantToBuy}</span>
                        <span onClick={plusProduct} className={stylesIf.plus}> </span>
                    </div>
                    <div className={stylesIf.price}>
                        {productData.price}<span>грн</span>
                    </div>
                    <div className={stylesIf.totalPrice}>
                        Вартість за {productData.wantToBuy}шт. - {productData.price * productData.wantToBuy}грн
                    </div>
                </div>
                <div style={{backgroundImage: `url(${productData.imgs[0]})`}} className={stylesIf.bgImg}>
                    {productData.condition === 'action' ? <div className={stylesIf.action}>Акція!</div> : null}
                </div>
                <div className={stylesIf.cardContent}>
                    <div className={stylesIf.name}>{productData.name}</div>
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
                    {productData.amount ? <div className={stylesIf.inStock}>В наявності {productData.amount} шт.</div> :
                        <div className={stylesIf.havNot}>Зараз немає</div>}
                    <div className={stylesIf.producer}>Виробник: {productData.producer}</div>
                    <div className={stylesIf.id}>Код товару: {productData.id}</div>
                    <NavLink onClick={setSinglePurchaseDataLocal} className={stylesIf.moreDetail}
                             to='/moreDetail'>Детальніше</NavLink>
                    <div className={stylesIf.price}>{productData.price}<span>грн</span></div>
                    <div className={stylesIf.buttonWrapper}>
                        <NavLink to='/check/singlePurchase' onClick={setSinglePurchaseDataLocal}
                                 className={productData.amount ? stylesIf.buy : stylesIf.disabledBuy}>Купити</NavLink>
                        {!basketCondition
                            ?
                            <div onClick={toggleProductToBasket}
                                 className={productData.amount ? stylesIf.inBasket : stylesIf.disabledBasket}>
                                В корзину
                            </div>
                            :
                            <div onClick={toggleProductToBasket} className={stylesIf.outBasket}>
                                Викласти
                            </div>
                        }
                    </div>
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
        </Animated>
    )
};

