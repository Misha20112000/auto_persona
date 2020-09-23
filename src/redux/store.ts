import {combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer';
import {basketReducer} from './basketReducer';
import {moreDetailReducer} from './moreDetailReducer';

const rootReducer = combineReducers({productsReducer, basketReducer, moreDetailReducer});

export const store = createStore(rootReducer);

store.subscribe(() => {
    localStorage['basket'] = JSON.stringify(store.getState().basketReducer.basketData);
});

store.subscribe(() => {
    localStorage['moreDetail'] = JSON.stringify(store.getState().moreDetailReducer.moreDetailData);
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;

