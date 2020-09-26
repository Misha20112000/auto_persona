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
                    rating: action.rating,
                    wantToBuy: action.wantToBuy,
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
        case PLUS: {
            let basketDataCopy = state.basketData
            const index = basketDataCopy.map((product: { id: any; }) => product.id).indexOf(action.id);
            basketDataCopy[index].wantToBuy = basketDataCopy[index].wantToBuy + 1;
            return {
                ...state, basketData: [...basketDataCopy]
            };
        }
        case MINUS: {
            let basketDataCopy = state.basketData
            const index = basketDataCopy.map((product: { id: any; }) => product.id).indexOf(action.id);
            basketDataCopy[index].wantToBuy = basketDataCopy[index].wantToBuy - 1;
            return {
                ...state, basketData: [...basketDataCopy]
            };
        }
        case CLEAR_BASKET: {
            return {
                ...state, basketData: [],
            };
        }
        default:
            return state;
    }
};

//AT
const TOGGLE_TO_BASKET = 'TOGGLE_TO_BASKET';
const PLUS = 'PLUS';
const MINUS = 'MINUS';
const CLEAR_BASKET = 'CLEAR_BASKET';
//AC
export const toggleToBasket = (name: string, condition: string, rating: number, wantToBuy: number, imgs: Array<string>, comments: Array<string>, amount: number, producer: string, id: string, price: number, specialCharacteristics: object) => {
    return {
        type: TOGGLE_TO_BASKET,
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
    }
};
export const plus = (id: string) => ({type: PLUS, id});
export const minus = (id: string) => ({type: MINUS, id});
export const clearBasket = () => ({type: CLEAR_BASKET});