import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducers} from "./reducers";
import createSagaMiddleware from 'redux-saga';
import root from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(root);