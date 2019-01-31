import React, { Component } from "react";
import "./Login.css";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import ForgotPassword from "./ForgotPassword"

const maintainmargin = {
  margin: "30px"
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailerror: "",
      password: "",
      passworderror: "",
      isAuthenticated:false,
      loggedin:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  validateForm = () => {
    let isError = false;
    const errors = {};

    if (!this.validateEmail(this.state.email)) {
      isError = true;
      errors.emailerror = "enter valid email";
    } else {
      errors.emailerror = "";
    }

    if (this.state.password.length < 8) {
      isError = true;
      errors.passworderror = "password should be atleast 8 characters long";
    } else {
      errors.passworderror = "";
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const err = this.validateForm();
    const that = this;
    if (!err) {
      var xhr=new XMLHttpRequest();
      xhr.open("POST","api/login?"+"_token="+document.querySelector("meta[name='csrf-token']").content+"&email="+this.state.email+"&password="+this.state.password);
      xhr.onreadystatechange=function(){
          if(xhr.readyState===4){
            if(xhr.status == 200 || xhr.status == 302 ){
              console.log(xhr.response)
              console.log(that.state);
              that.setState({
                email: "",
                emailerror: "",
                password: "",
                passwordError: "",
                isAuthenticated:true,
                loggedin:true
              });
              console.log("!!!Logged In !!!",that.state.isAuthenticated)
            }
            else if(xhr.status==404){
              alert("either password or username is wrong!! try again !!");
              that.setState({
                passwordError:"Password is wrong"
              })
            }
            else{
              "server error";
            }
          }
      }
      xhr.send();
    }
  }

  render() {
    if(this.state.isAuthenticated){
      return(
        <Redirect to="/"/>
        );
    }
    return (
      <Router>
      <div className="wrapper fadeInDown">
        <div id="formContent" style={maintainmargin}>
          <div className="fadeIn first profile-userpic">
            <i className="glyphicon glyphicon-user" id="icon" />
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.emailerror}</div>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.passworderror}</div>
            <button
              className="submit-button fadeIn fourth"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
              <Link className="underlineHover" to="/forgotpassword">Forgot Passowrd?</Link>
              <Route path="/forgotpassword" component={ForgotPassword}/>
        </div>
      </div>
      </div>
      </Router>
    );
  }
}


