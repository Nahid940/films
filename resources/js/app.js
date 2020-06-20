require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './Main'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>
, document.getElementById('app'));