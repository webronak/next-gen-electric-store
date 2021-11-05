import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer.jsx";
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();
const middlewares = [logger,thunk,SagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
SagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
 