import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "../../RegisterPage/RegisterPage.css";

const maintainmargin = {
  margin: "30px"
};

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productname:"",
      productnameError:"",
      brandname:"",
      brandnameError:"",
      measuringunit:"",
      measuringunitError:"",
      priceperunit:"",
      priceperunitError:"",
      minimumsalequantity:1,
      minimumsalequantityError:"",
      totalquantity:1,
      totalquantityError:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Validate Form Data Client Side
  validateForm = () => {
    let isError = false;
    const errors = {};

    if (this.state.productname.length < 1) {
      isError = true;
      errors.productnameError = "Product Name cannot be empty.";
    } else {
      errors.productnameError = "";
    }

    if (this.state.brandname.length < 1) {
      isError = true;
      errors.brandnameError = "Brand Name cannot be empty. Instead you can fill 'Other'";
    } else {
      errors.brandnameError = "";
    }

    if (this.state.measuringunit.length < 1) {
      isError = true;
      errors.measuringunitError = "Measuring unit cannot be empty. Instead you can fill 'piece/kg/gram'";
    } else {
      errors.measuringunitError = "";
    }

    if (this.state.minimumsalequantity < 1) {
      isError = true;
      errors.minimumsalequantity = "Minimum sale quantity cannot be less than 1.";
    } else {
      errors.minimumsalequantityError = "";
    }

    if (this.state.totalquantity < 1) {
      isError = true;
      errors.totalquantityError = "Total quantity cannot be less than 1.";
    } else {
      errors.totalquantityError = "";
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
      xhr.open("POST","api/register?"+"_token="+document.querySelector("meta[name='csrf-token']").content+"&brandname="+this.state.brandname+"&name="+this.state.brandName+"&user_type="+this.state.userType+"&contact_no="+this.state.phoneNumber+"&password="+this.state.password);
      var that=this;
      xhr.onreadystatechange=function(){
          if(xhr.readyState===4){
            if(xhr.status === 201){
              console.log(this.state);
              that.setState({
                productname:"",
                productnameError:"",
                brandname:"",
                brandnameError:"",
                measuringunit:"",
                measuringunitError:"",
                priceperunit:"",
                priceperunitError:"",
                minimumsalequantity:1,
                minimumsalequantityError:"",
                totalquantity:1,
                totalquantityError:""
              });
              console.log("!!! 201 : Product Added Succesfully !!!");
            }
            // only if all datas are matched
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
        <Redirect to="/profile"/>
        );
    }
    else{
      return (
        <div className="wrapper fadeInDown">
          <div className="login-k" style={maintainmargin}>
            <div className="server-error">{this.state.servererror}</div>
              <div className="fadeIn first profile-userpic">
                <i className="glyphicon glyphicon-shopping-cart" id="icon" />
              </div>
              <div className="login-container">
                <form>
                  <div className="form-box fadeIn second">
                    <div className="form-field">Product Name:</div>
                    <input
                      className="input-box fadeIn third"
                      name="productname"
                      placeholder="product name"
                      value={this.state.productame}
                      onChange={this.handleChange}
                    />
                    <div className="error-message">
                      {this.state.productnameError}
                    </div>
                  </div>

                  <div className="form-box fadeIn second">
                    <div className="form-field">Brand Name : </div>
                    <input
                      className="input-box fadeIn third"
                      name="brandname"
                      placeholder="brandname"
                      type="brandname"
                      value={this.state.brandname}
                      onChange={this.handleChange}
                    />
                    <div className="error-message">{this.state.brandnameError}</div>
                  </div>

                  <div className="form-box fadeIn third">
                    <div className="form-field">Measuring Unit :</div>
                    <input
                      className="input-box fadeIn fourth"
                      name="measuringunit"
                      placeholder="measuring unit"
                      value={this.state.measuringunit}
                      onChange={this.handleChange}
                    />
                    <div className="error-message">
                      {this.state.measuringunitError}
                    </div>
                  </div>

                  <div className="form-box fadeIn third">
                    <div className="form-field">Minimum Sale Quantity:</div>
                    <input
                      className="input-box fadeIn fourth"
                      name="minimumsalequantity"
                      placeholder="minimum sale quantity"
                      type="number"
                      value={this.state.minimumsalequantity}
                      min="1"
                      onChange={this.handleChange}
                    />
                    <div className="error-message">{this.state.minimumsalequantityError}</div>
                  </div>

                  <div className="form-box fadeIn fourth">
                    <div className="form-field">Total Quantity</div>
                    <input
                      className="input-box"
                      name="totalquantity"
                      placeholder="total quantity"
                      type="number"
                      value={this.state.totalquantity}
                      min="1"
                      onChange={this.handleChange}
                    />
                    <div className="error-message">
                      {this.state.totalquantityError}
                    </div>
                  </div>

                  <button
                    className="submit-button fadeIn fourth"
                    onClick={this.handleSubmit}
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
      );
  }
  }
}
