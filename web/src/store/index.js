import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducers';
import rootSagas from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
export default store;
