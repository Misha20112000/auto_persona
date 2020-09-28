const initialState = {
    basketData: (!localStorage.getItem('basket') ? [] : JSON.parse(localStorage.getItem('basket') as string)),
};

export const basketReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_TO_BASKET: {
            let basketDataCopy = state.basketData;

            if (basketDataCopy.some((product : IProductObject) => product.id === action.product.id)) {
                const basketDataCopy2 = state.basketData;
                basketDataCopy = basketDataCopy2.filter((product: IProductObject) => product.id !== action.product.id);
            } else {
                const basketDataCopy2 = state.basketData;

                const product: IProductObject = {
                    name: action.product.name,
                    condition: action.product.condition,
                    rating: action.product.rating,
                    wantToBuy: action.product.wantToBuy,
                    imgs: action.product.imgs,
                    comments: action.product.comments,
                    amount: action.product.amount,
                    producer: action.product.producer,
                    id: action.product.id,
                    price: action.product.price,
                    specialCharacteristics: action.product.specialCharacteristics
                }
                basketDataCopy = [{...product}, ...basketDataCopy2];
            }
            return {
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
export const toggleToBasket = (product: IProductObject) => ({type: TOGGLE_TO_BASKET, product});
export const plus = (id: string) => ({type: PLUS, id});
export const minus = (id: string) => ({type: MINUS, id});
export const clearBasket = () => ({type: CLEAR_BASKET});