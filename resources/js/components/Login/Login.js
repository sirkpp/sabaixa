import React, { Component } from "react";
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
      var xhr=new XMLHttpRequest();
      xhr.open("POST","api/login?"+"_token="+document.querySelector("meta[name='csrf-token']").content+"&email="+this.state.username+"&password="+this.state.password);
      xhr.onreadystatechange=function(){
          if(xhr.readyState===4){
            
            console.log(xhr.response);
            this.setState({
              username: "",
              usernameerror: "",
              password: "",
              passwordError: ""
            });
          }
      }
      xhr.send();

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
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div className="error-message"> {this.state.usernameerror}</div>
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

