const initialState = {
    productsData: [],
    activeTab: 1
};

export const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, productsData: action.productsData
            }
        }
        case CHANGE_ACTIVE_TAB: {
            return {
                ...state, activeTab: action.activeTab
            }
        }
        default:
            return state;
    }
};

//AT
const SET_PRODUCTS = 'SET_PRODUCTS';
const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
//AC
export const setProducts = (productsData: Array<IProductObject>) => ({type: SET_PRODUCTS, productsData});
export const changeActiveTab = (activeTab: number) => ({type: CHANGE_ACTIVE_TAB, activeTab});
