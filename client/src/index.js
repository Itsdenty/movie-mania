import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux';
import {StripeProvider} from 'react-stripe-elements';
const persistor = persistStore(store);

ReactDOM.render(
<Provider store={store}>
    <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </StripeProvider>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
