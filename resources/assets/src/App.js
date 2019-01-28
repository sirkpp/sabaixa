import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
//import "./css/bootstrap.min.css";
import "./css/slick.css";
import "./css/nouislider.min.css";
import "./css/style.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";



const NewRoute=()=>{
  return(
    <div>
      <h1>hello new world</h1>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header/>
      <Switch>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/" component={LoginPage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path="/store" component={Navigation}/>
        <Route path="/new" component={NewRoute} />
        <Route path="/page" component={MainPage} />
        <Route component={Error}/>
      </Switch>

      
      </div>
      </BrowserRouter>

      
    );
  }
}

export default App;
