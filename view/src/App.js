import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
hong
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <Home />
          )}/>
           <Route exact path="/product" render={() => (
            <Product />
          )}/>
        </Switch>
      </div>
    )
  }
}