import React, { Component } from "react";
import "./RegisterPage.css";

const maintainmargin = {
  margin: "30px"
};

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: "",
      userTypeError: "",
      companyName: "",
      companyNameError: "",
      phoneNumber: "",
      phoneNumberError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: ""
    };
  }

  _submitHandleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({
      userType: value
    });
  };

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate Form Data Client Side
  validateForm = () => {
    let isError = false;
    const errors = {};

    if (this.state.userType.length < 1 || this.state.userType === "select") {
      isError = true;
      errors.userTypeError = "select user type";
    } else {
      errors.userTypeError = "";
    }

    if (this.state.companyName.length < 1) {
      isError = true;
      errors.companyNameError = "Company Name cannot be empty";
    } else {
      errors.companyNameError = "";
    }

    if (!this.validateEmail(this.state.email)) {
      isError = true;
      errors.emailError = "invalid email";
    } else {
      errors.emailError = "";
    }

    if (this.state.phoneNumber.length < 10 && !isNaN(this.state.phoneNumber)) {
      isError = true;
      errors.phoneNumberError = "invalid Phone number";
    } else {
      errors.phoneNumberError = "";
    }

    if (this.state.password.length < 8) {
      isError = true;
      errors.passwordError = "password should be atleast 8 characters long";
    } else {
      errors.passwordError = "";
    }

    if (
      this.state.confirmPassword !== this.state.password ||
      this.state.confirmPassword.length === 0
    ) {
      isError = true;
      errors.confirmPasswordError = "password doesn't match, re-enter password";
    } else {
      errors.confirmPasswordError = "";
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    const err = this.validateForm();
    if (!err) {
      var xhr=new XMLHttpRequest();
      xhr.open("POST","api/register?"+"_token="+document.querySelector("meta[name='csrf-token']").content+"&email="+this.state.email+"&name="+this.state.companyName+"&user_type="+this.state.userType+"&contact_no="+this.state.phoneNumber+"&password="+this.state.password);
      xhr.onreadystatechange=function(){
          if(xhr.readyState===4){
            if(xhr.status === 201){

            }
            else{
              let errors ={};
              errors.servererror = "201 : Server Error <br/> Failed to connect to the server. Please, try again!"
              this.setState({
                ...this.state,
                ...errors
              });
            }
           });
          }
      }
      xhr.send();

    }
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div className="login-k" style={maintainmargin}>
        <div className="server-error">{this.state.servererror}</div>
          <div className="fadeIn first profile-userpic">
            <i className="glyphicon glyphicon-user" id="icon" />
          </div>
          <div className="login-container">
            <form>
              <div class="form-box">
                <div class="form-field fadeIn second">Choose Type</div>
                <select
                  onChange={e => this._submitHandleChange(e)}
                  className="select-field fadeIn third"
                >
                  <option value="select">select</option>
                  <option value="general">General</option>
                  <option value="producer">Producer</option>
                  <option value="wholesaler">Whole Saler</option>
                  <option vlaue="Transport">Transport Agency</option>
                </select>
                <div className="error-message"> {this.state.userTypeError}</div>
              </div>

              <div class="form-box fadeIn second">
                <div class="form-field">Enter your company name</div>
                <input
                  className="input-box fadeIn third"
                  name="companyName"
                  placeholder="company name"
                  value={this.state.companyName}
                  onChange={e => this.handleChange(e)}
                />
                <div className="error-message">
                  {this.state.companyNameError}
                </div>
              </div>

              <div class="form-box fadeIn second">
                <div class="form-field">Enter email address</div>
                <input
                  className="input-box fadeIn third"
                  name="email"
                  placeholder="email"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <div className="error-message">{this.state.emailError}</div>
              </div>

              <div class="form-box fadeIn third">
                <div class="form-field">Conact Number</div>
                <input
                  className="input-box fadeIn fourth"
                  name="phoneNumber"
                  placeholder="phone number"
                  value={this.state.phoneNumber}
                  onChange={e => this.handleChange(e)}
                />
                <div className="error-message">
                  {this.state.phoneNumberError}
                </div>
              </div>

              <div class="form-box fadeIn third">
                <div class="form-field">Password</div>
                <input
                  className="input-box fadeIn fourth"
                  name="password"
                  placeholder="password"
                  type="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <div className="error-message">{this.state.passwordError}</div>
              </div>

              <div class="form-box fadeIn fourth">
                <div class="form-field">Re-enter Password</div>
                <input
                  className="input-box"
                  name="confirmPassword"
                  placeholder="confirm password"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={e => this.handleChange(e)}
                />
                <div className="error-message">
                  {this.state.confirmPasswordError}
                </div>
              </div>

              <button
                className="submit-button fadeIn fourth"
                onClick={e => this.handleSubmit(e)}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

