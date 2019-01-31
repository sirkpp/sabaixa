import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import RegisterPage from "./components/RegisterPage/RegisterPage";

import Company from "./components/Company";

import "./css/slick.css";
import "./css/slick-theme.css";
import "./css/nouislider.min.css";
import "./css/style.css";




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
        <Route path="/" component={Home} exact/>
        <Route path="/store" component={Navigation}/>
        <Route path="/login" component={Login} exact/>
        <Route path="/new" component={NewRoute} />
        <Route path="/page" component={MainPage} />
        <Route path="/company" component={Company} />
        <Route component={Error}/>
      </Switch>

      
      </div>
      </BrowserRouter>

      
    );
  }
}

export default App;

