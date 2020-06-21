require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store'
import Main from './Main'
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <Main/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
, document.getElementById('app'));