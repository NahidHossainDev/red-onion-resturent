import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Home/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import FoodDetail from './Component/FoodDetail/FoodDetail';
import NotFound from './Component/NotFound';
import CheckOutDetail from './Component/DeliveryDetail/DeliveryDetail';
import FinishCheckout from './Component/FinishCheckOut/FinishCheckOut';

export const ContextElement = createContext();

function App() {
  const [addedFoodToCart, setAddedFoodToCart] = useState([]);
  const [address, setAddress] = useState();
  return (
    <div className="App">
      <Router>
        <ContextElement.Provider value={[addedFoodToCart, setAddedFoodToCart, address, setAddress]}>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/foodDetail/:id">
              <FoodDetail></FoodDetail>
            </Route>
            <Route path="/checkout">
              <CheckOutDetail></CheckOutDetail>
            </Route>
            <Route path="/finishCheckout">
              <FinishCheckout />
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </ContextElement.Provider>
      </Router>
    </div>
  );
}

export default App;
