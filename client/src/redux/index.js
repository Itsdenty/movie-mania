import { compose, applyMiddleware , createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Middlewares
const middleware = [thunk];
const initialState = {};

const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore (
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;