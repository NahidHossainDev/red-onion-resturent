import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import FoodDetail from './Component/FoodDetail/FoodDetail';
import NotFound from './Component/NotFound';
function App() {

  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Router path='/foodDetail/:id'>
            <FoodDetail></FoodDetail>
          </Router>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Router path='/*'>
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
