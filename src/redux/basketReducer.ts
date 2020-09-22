import {act} from "react-dom/test-utils";

const initialState = {
    basketData: (!localStorage.getItem('basket') ? [] : JSON.parse(localStorage.getItem('basket') as string)),
};

export const basketReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_TO_BASKET: {
            // @ts-ignore
            let basketDataCopy = state.basketData;
            // @ts-ignore
            if (basketDataCopy.some(product => product.id === action.id)) {
                const basketDataCopy2 = state.basketData;
                // @ts-ignore
                basketDataCopy = basketDataCopy2.filter(product => product.id !== action.id);
            } else {
                const basketDataCopy2 = state.basketData;
                // @ts-ignore
                const product = {
                    name: action.name,
                    condition: action.condition,
                    rating : action.rating,
                    imgs: action.imgs,
                    comments: action.comments,
                    amount: action.amount,
                    producer: action.producer,
                    id: action.id,
                    price: action.price,
                    specialCharacteristics: action.specialCharacteristics
                }
                basketDataCopy = [{...product}, ...basketDataCopy2];
            }
            return {
                // @ts-ignore
                ...state, basketData: [...basketDataCopy]
            }
        }
        default:
            return state;
    }
};

//AT
const TOGGLE_TO_BASKET = 'TOGGLE_TO_BASKET';
//AC
export const toggleToBasket = (name :string, condition: string, rating :number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => ({type: TOGGLE_TO_BASKET, name, condition, rating, imgs, comments, amount, producer, id, price, specialCharacteristics})
