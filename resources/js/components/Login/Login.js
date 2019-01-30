import React, { Component } from "react";
import history from "history";
import ForgotPassword from "./ForgotPassword";
import RegisterPage from "../RegisterPage/RegisterPage";
import "./Login.css";

const maintainmargin = {
  margin: "30px"
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameerror: "",
      password: "",
      passworderror: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      name: value
    });
  }

  validateForm = () => {
    let isError = false;
    const errors = {};

    if (this.state.username.length < 1) {
      isError = true;
      errors.usernameerror = "enter valid username";
    } else {
      errors.usernameerror = "";
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
    if (!err) {
      console.log(this.state);
      this.setState({
        username: "",
        usernameerror: "",
        password: "",
        passwordError: ""
      });
    }
  }

  handleClick(e) {
    const { name } = e.target;
    if (name === "SignUp") {
      this.setState({ notamember: !this.state.notamember });
    }
  }

  ComponentDidMount() {
    this.setState({ notamember: false });
  }

  render() {
    return (
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
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.usernameerror}</div>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.passworderror}</div>
            <button
              className="submit-button fadeIn fourth"
              onClick={e => this.handleSubmit(e)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}