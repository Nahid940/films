require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import List from './components/list.component'
import Header from './header/header'
import CreateFilm from './components/films/create.component'
import View from './components/films/view.component'

ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/films" component={List}/>
            <Route path="/films/create" component={CreateFilm}/>
            <Route path="/films/:slug" component={View}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('app'));