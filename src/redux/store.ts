import {combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer';
import {basketReducer} from './basketReducer';

const rootReducer = combineReducers({productsReducer, basketReducer});

export const store = createStore(rootReducer);

store.subscribe(() => {
    // @ts-ignore
    localStorage['basket'] = JSON.stringify(store.getState().basketReducer.basketData);
})
// console.log(localStorage);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;

