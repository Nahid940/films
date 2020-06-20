import React from 'react';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import List from './components/list.component'
import Header from './header/header'
import CreateFilm from './components/films/create.component'
import View from './components/films/view.component'
import Details from './components/film-details/details.component'
import Login from './components/auth/login.component'
import Register from './components/auth/register.component'
import {connect} from 'react-redux'

const Main=({loggedINUSer})=>
{
    return(
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" render={()=>loggedINUSer?(<Redirect to="/"/>):(<Login/>)} />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/films" component={List}/>
                <Route exact path="/film/details/:slug" component={Details}/>
                <Route path="/films/create" component={CreateFilm}/>
                <Route path="/films/:slug" component={View}/>
            </Switch>
        </>
    )
}

const stateToProps=state=>({
    loggedINUSer:state.user.loggedINUSer
})
export  default  connect(stateToProps)(Main)