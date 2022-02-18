import React, { Component } from "react";
import Menu from '../components/menu';
import { ALBUM1 } from '../shared/songs';
import { ALBUM2 } from '../shared/songs';
import {  NavbarBrand,Container } from 'reactstrap';
import { Nav,Col,Row } from 'react-bootstrap';
import ReactDOM from "react-dom";

class AboutUs extends Component {
  
  constructor(props){
		super(props);
		
		this.state = {
			songs: ALBUM1,
      songs1: ALBUM2
		};
  }
    render(){
  return (
  <Container  > 
    <div className='AboutUs'>
        
         <div className="cover-photo">
             <div className="title-cover">
                <h1>LIGHT SHIFT HISTORY</h1>
             </div>         
          <p id="textbox"> A small band from a small country . Light Shift was established as a sole project by Maxim Iuzvac in 2018 . It had humble beginnings
            ,but now it has 2 albums published on Spotify, and a significant increase in monthly listeners. </p>
        
      </div>
    
    </div>
    </Container>
  );
}
}



export default AboutUs;