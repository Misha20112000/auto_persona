const initialState: any = {
    moreDetailData: (!localStorage.getItem('moreDetail') ? [] : JSON.parse(localStorage.getItem('moreDetail') as string)),
};

export const moreDetailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MORE_DETAIL_DATA: {
            const moreDetailObj = {
                name: action.product.name,
                condition: action.product.condition,
                rating: action.product.rating,
                wantToBuy: action.product.wantToBuy,
                inBasket: action.product.inBasket,
                imgs: action.product.imgs,
                comments: action.product.comments,
                amount: action.product.amount,
                producer: action.product.producer,
                id: action.product.id,
                price: action.product.price,
                specialCharacteristics: action.product.specialCharacteristics,
            }
            return {
                ...state, moreDetailData: moreDetailObj
            };
        }
        default:
            return state;
    }
};

//AT
const SET_MORE_DETAIL_DATA = 'SET_MORE_DETAIL_DATA';
//AC
export const setMoreDetailData = (product: any) => ({type: SET_MORE_DETAIL_DATA, product});
