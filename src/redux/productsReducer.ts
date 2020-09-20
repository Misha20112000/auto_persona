const initialState = {
    productsData: []
};

export const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, productsData: action.productsData
            }
        }
        default:
            return state;
    }
};

//AT
const SET_PRODUCTS = 'SET_PRODUCTS';
//AC
export const setProducts = (productsData: Array<object>) => ({type: SET_PRODUCTS, productsData});
