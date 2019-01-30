import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SignUp-SignIn.css";
import RegisterPage from "../RegisterPage/RegisterPage";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";

export default class SignUpSignIn extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row profile">
            <div className="col-md-3 fadeInDown">
              <div className="profile-sidebar">
                <div className="signupsignin">
                  <ul className="nav">
                    <li className="active">
                      <Link to="/">
                        <i className="glyphicon glyphicon-log-in" /> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/forgotpassword">
                        <i className="glyphicon glyphicon-question-sign" />{" "}
                        Forgot Password
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup">
                        <i className="glyphicon glyphicon-check" /> Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="profile-content">
                <Route path="/" exact component={Login} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/signup" component={RegisterPage} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
