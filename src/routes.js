
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cliente from './pages/Cliente'
import Produto from './pages/Produto'
import Chat from './pages/Chat'
import Vendedor from './pages/Vendedor'
import CadastroProduto from './pages/CadastroProduto'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cliente" component={Cliente}/>
                <Route path="/produto" component={Produto}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/vendedor" component={Vendedor}/>
                <Route path="/cadastroProduto" component={CadastroProduto}/>
            </Switch>
        </BrowserRouter>
    )
}