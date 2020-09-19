import {combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer';

const rootReducer = combineReducers({productsReducer});

export const store = createStore(rootReducer);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
window.store = store;