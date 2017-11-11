import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const middlewares = [thunk];
if(__DEV__) {{
    middlewares.push(logger);
}};
const store = createStore(reducers,applyMiddleware(...middlewares));
export  default store;