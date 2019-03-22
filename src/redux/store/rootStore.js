import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (insitialState = {}) => {
    const middlewares = [thunkMiddleware];
    let composeEnhancers = compose;

    if(process.env.NODE_ENV === 'development') {
        if('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        }
    }
    return createStore(
        rootReducer,
        insitialState,
        composeEnhancers(applyMiddleware(...middlewares))
    )
}

export default configureStore
