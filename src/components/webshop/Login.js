import React, { Component } from "react";
import withContext from "../../withContext"
import axios from 'axios';
import { Navigate } from "react-router";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Userfront from "@userfront/core";
import './Login.css';
import ResetPassword from "./ResetPassword";

class Login extends Component {
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

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };


  render() {
    
    return !this.props.context.user ? (
      <>
        <div className="login-container is-primary ">
          <div className="login-container-body container">
            <h4 className="login-title">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.login}>
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
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <br/>
                <button className="login-button is-primary is-outlined is-pulled-left">
                  Create Account
                </button>
                
                <button 
                className="login-button is-primary reset-password "
                //Create Reset password 
                onClick={<ResetPassword/>}
                >
                  Forgot Password?
                </button>
                <button
                  className="login-button is-primary is-outlined is-pulled-right"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      // <Route path="/login" element={<Navigate replace to="/" />} />
      // <Router>
      // <Navigate replace to="/" />
      // </Router>
      window.location.href = "/"
    );
  }
}

export default withContext(Login);