import {combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer';
import {basketReducer} from './basketReducer';
import {personalDataReducer} from './personalDataReducer';

const rootReducer = combineReducers({productsReducer, basketReducer, personalDataReducer});

export const store = createStore(rootReducer);

store.subscribe(() => {
    localStorage['basket'] = JSON.stringify(store.getState().basketReducer.basketData);
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;

