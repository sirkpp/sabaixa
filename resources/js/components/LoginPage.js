import React, { Component } from "react";

//import "./Login.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "krihnapd133@gmail.com",
      password: "*****"
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <form controlId="email" bsSize="large">
            Email
            <input 
                name="email"
                placeholder="email" 
                value={this.state.email} 
                onChange={e => this.handleChange(e)}/>
                    
                
          </form>
          <br/>
          <form controlId="password" bsSize="large">
          Password
          <input 
          name="password"
          placeholder="password" 
          type="password" 
          value={this.state.password}
          onChange={e => this.handleChange(e)}/>
          </form>

          <button type="submit" onClick={(e)=>this.handleSubmit(e)}>
            submit
          </button>
            
        </form>
      </div>
    );
  }
}