import React from 'react';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar'
import 'materialize-css/dist/css/materialize.min.css'
import Home from './components/Home';
import InventoryView from './components/inventoryBrowser/InventoryView';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/viewInventory' component={InventoryView}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
