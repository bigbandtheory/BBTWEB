import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {initialState} from '../constants/InitialState'


const store = getStore(rootReducer, initialState, [thunk]);

export function getStore(rootReducer, initialState = null, middleware = []){
    return createStore(rootReducer, initialState, compose(
        applyMiddleware.apply(this, middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

export default store;