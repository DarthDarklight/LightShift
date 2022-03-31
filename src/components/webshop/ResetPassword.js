import React, { Component } from "react";
import withContext from "../../withContext"
import axios from 'axios';
import { Navigate } from "react-router";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Userfront from "@userfront/core";
import './Login.css';

class resetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordVerify: ""
    };
  }
  

  handleSubmit () {
    axios.post(/**/)
      .then(() => this.setState({ redirect: true }));
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  reset = (e) =>{
    e.preventDefault();
    if (this.state.password !== this.state.passwordVerify){
      return;
    }
    Userfront.resetPassword({
      password: this.state.password,
    });
  }


  render() {
    
    return !this.props.context.user ? (
      <>
        <div className="login-container is-primary ">
          <div className="login-container-body container">
            <h4 className="login-title">Reset Password</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.reset}>
          <div className="columns is-mobile is-centered">
            <div className="login-column is-one-third">
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
               <div className="field">
                <label className="label">Re-type Password: </label>
                <input
                  className="input"
                  type="password"
                  name="passwordVerify"
                  value={this.state.passwordVerify}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}

              <div className="field is-clearfix">
                <br/>
                <button className="login-button is-primary is-outlined " type="submit">
                  Reset Password
                </button>
                
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      window.location.href = "/shop/reset"
    );
  }
}

export default withContext(resetPassword);