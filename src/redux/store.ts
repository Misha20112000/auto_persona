import {combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer';
import {basketReducer} from './basketReducer';
import {personalDataReducer} from './personalDataReducer';
import {singlePurchaseReducer} from './singlePurchaseReducer';

const rootReducer = combineReducers({productsReducer, basketReducer, personalDataReducer, singlePurchaseReducer});

export const store = createStore(rootReducer);

store.subscribe(() => {
    localStorage['basket'] = JSON.stringify(store.getState().basketReducer.basketData);
});

store.subscribe(() => {
    localStorage['singlePurchase'] = JSON.stringify(store.getState().singlePurchaseReducer.singlePurchaseData);
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;

