
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cliente from './pages/Cliente'
import Produto from './pages/Produto'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cliente" component={Cliente}/>
                <Route path="/produto" component={Produto}/>
            </Switch>
        </BrowserRouter>
    )
}