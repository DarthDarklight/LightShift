import React, { Component } from "react";
import Menu from '../components/menu';
import { ALBUM1 } from '../shared/songs';
import { ALBUM2 } from '../shared/songs';
import {  NavbarBrand,Container } from 'reactstrap';
import { Nav,Col,Row } from 'react-bootstrap';
import ReactDOM from "react-dom";

class Forum extends Component {
  
  
    render(){
  return (
    <div className='Forum'>
    <Container  >
    

    <div class="container">
        <h2>LIGHT SHIFT FORUM</h2>
        <span class="border"></span>
    <p>Sign up with your email to post on the official Light Shift forums!</p>
    <hr></hr>
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="usrname">Username</label>
    </div>
    <div class="col-75">
      <input type="text" id="usrname" name="username" placeholder="Username"></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="pwd">Password</label>
    </div>
    <div class="col-75">
      <input type="password" id="pwd" name="pwd" placeholder="Password"></input>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="email">Email</label>
    </div>
    <div class="col-75">
      <input type="email" name="email" placeholder="Email" ></input>
    </div>
  </div>
  <br></br>
  <div class="row">
    <input type="submit" value="Submit"></input>
  </div>
  </form>
</div>
      
        
    </Container>
    </div>
  );
}
}



export default Forum;