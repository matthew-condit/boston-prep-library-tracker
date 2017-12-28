import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './redux/reducers/index';


export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk, 
    routerMiddleware(history)
];

const composedEhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEhancers
);

export default store;