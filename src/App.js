import 'bootstrap/dist/css/bootstrap.css';
import anime from 'animejs/lib/anime.es.js';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import SplashPage from "./SplashPage"


function App() {
  return (

  <Router>
    
    <Switch>
        <Route exact path="/">
          <SplashPage></SplashPage>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
    </Switch>


  </Router>
  )
}

export default App;
