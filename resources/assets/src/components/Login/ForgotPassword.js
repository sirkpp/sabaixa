import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import "./Login.css";

const maintainmargin = {
  margin: "30px"
};

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      credentialtosearch: "",
      credentialerror: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.validateForm.bind(this);
  }

  validateForm = () => {
    let isError = false;
    const errors = {};

    if (this.state.credentialtosearch.length < 1) {
      isError = true;
      errors.credentialerror = "invalid username, email or phone";
    } else {
      errors.credentialerror = "";
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };

  handleChange(e) {
    this.setState({ credentialtosearch: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const err = this.validateForm();
    if (!err) {
      console.log(this.state);
      this.setState({
        credentialtosearch: "",
        credentialerror: ""
      });
    }
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
              name="login"
              placeholder="Email, Phone or Username"
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.credentialerror}</div>
            <div className="resetpassform">
              <button
                className="submit-button fadeIn fourth"
                onClick={e => this.handleSubmit(e)}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
