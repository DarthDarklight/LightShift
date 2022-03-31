import React, { Component } from "react";
import Menu from '../components/menu';
import { ALBUM1 } from '../shared/songs';
import { ALBUM2 } from '../shared/songs';
import {  NavbarBrand,Container, Media } from 'reactstrap';
import { Nav,Col,Row } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { faFontAwesomeLogoFull } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  
  constructor(props){
		super(props);
		
		this.state = {
			songs: ALBUM1,
      songs1: ALBUM2
		};
  }
    render(){
        return (
    <Container>
    <div className='Home'>
    <Menu songs={this.state.songs} />
    </div></Container>
  );

}
}



export default Home;