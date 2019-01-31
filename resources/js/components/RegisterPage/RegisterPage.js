import React, { Component } from "react";
import {Redirect} from "react-router-dom";
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
      confirmPasswordError: "",
      createsuccess:false
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

    if (this.state.phoneNumber.length < 9 && !isNaN(this.state.phoneNumber)) {
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
    const errors ={};
    if (!err) {
      var xhr=new XMLHttpRequest();
      xhr.open("POST","api/register?"+"_token="+document.querySelector("meta[name='csrf-token']").content+"&email="+this.state.email+"&name="+this.state.companyName+"&user_type="+this.state.userType+"&contact_no="+this.state.phoneNumber+"&password="+this.state.password);
      var that=this;
      xhr.onreadystatechange=function(){
          if(xhr.readyState===4){
            if(xhr.status === 201){
              console.log(this.state);
              that.setState({
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
                confirmPasswordError: "",
                createsuccess:true
              });
              console.log("!!! 201 : Created Succesfully !!!");
            }
            else if(xhr.status === 500){
              alert("Duplicate data entry found. One or more credentials supplied used are already used for registration.");
              // that.setState({...that.state,...errors})
            }
            else{
              alert("Sorry! The server didn't respond. Please, try again");
            }
          }
      }
      xhr.send();
    }
  };

  render() {
    if(this.state.createsuccess){
      // alert("Account creation successfull.");
      return(
        <Redirect to="/"/>
        );
    }
    else{
      return (
        <div className="wrapper fadeInDown">
          <div className="login-k" style={maintainmargin}>
            <div className="server-error">{this.state.servererror}</div>
              <div className="fadeIn first profile-userpic">
                <i className="glyphicon glyphicon-user" id="icon" />
              </div>
              <div className="login-container">
                <form>
                  <div className="form-box">
                    <div className="form-field fadeIn second">Choose Type</div>
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

                  <div className="form-box fadeIn second">
                    <div className="form-field">Enter your company name</div>
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

                  <div className="form-box fadeIn second">
                    <div className="form-field">Enter email address</div>
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

                  <div className="form-box fadeIn third">
                    <div className="form-field">Conact Number</div>
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

                  <div className="form-box fadeIn third">
                    <div className="form-field">Password</div>
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

                  <div className="form-box fadeIn fourth">
                    <div className="form-field">Re-enter Password</div>
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
}
