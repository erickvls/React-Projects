import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { ProductList } from './views/Products';
import { ProductComponent } from './views/Product';


function App () {
    return (
      <div id="main-app">
        <BrowserRouter>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/product/:id" component={ProductComponent}></Route>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
