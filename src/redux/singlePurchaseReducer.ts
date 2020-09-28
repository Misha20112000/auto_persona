const initialState = {
    singlePurchaseData: (!localStorage.getItem('basket') ? {} : JSON.parse(localStorage.getItem('singlePurchase') as string)),
};

export const singlePurchaseReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SINGLE_PURCHASE_DATA: {
            return {
                ...state, singlePurchaseData: {...action.product}
            }
        }
        case PLUS_SP: {
            const singlePurchaseDataCopy = {...state.singlePurchaseData}
            singlePurchaseDataCopy.wantToBuy += 1
            console.log(action.id)
            return {
                ...state, singlePurchaseData: {...singlePurchaseDataCopy}
            }
        }
        case MINUS_SP: {
            const singlePurchaseDataCopy = {...state.singlePurchaseData}
            singlePurchaseDataCopy.wantToBuy -= 1
            console.log(action.id)
            return {
                ...state, singlePurchaseData: {...singlePurchaseDataCopy}
            }
        }
        default:
            return state;
    }
};

//AT
const SET_SINGLE_PURCHASE_DATA = 'SET_SINGLE_PURCHASE_DATA';
const PLUS_SP = 'PLUS_SP';
const MINUS_SP = 'MINUS_SP';
//AC
export const setSinglePurchaseData = (product: IProductObject) => ({type: SET_SINGLE_PURCHASE_DATA, product})
export const plusSP = (id: string) => ({type: PLUS_SP, id})
export const minusSP = (id: string) => ({type: MINUS_SP, id})
