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
import Test from "./Test"
import SplashPage from "./SplashPage"



// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

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
        <Route exact path="/test">
          <Test></Test>
        </Route>
    </Switch>


  </Router>
  )
}

export default App;
