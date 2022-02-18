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
      // const menu = this.props.songs.map((song) => {
        return (
    // <div key={song.id} id="unit" >
    <Container>
    <div className='Home'>
    {/* <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>       
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>      
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>        
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>       
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >
          
            <img src={"./Logo.png"} alt={""} className="logo">		
          </img>
          <div class="overlay">
            <Media heading className="title">{"song.name"} </Media>
           <p ><strong>Album - </strong>{"song.album"}</p>
           <p ><strong>Release - </strong>{"song.release"}</p>
					 <p ><strong>Duration - </strong>{"song.duration"}</p> 
           <button><a href={songs1.link}></a>LISTEN ON SPOTIFY</button>
           </div>
          
        </a>
         </div> 
          </Container>   
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>        
      </div>
    </div>
    <div className="responsive">
      <div className="gallery">
        <a target={"_blank"} href={"./Logo.png"} >
          <img src={"./Logo.png"} alt={""} className="logo"></img>
        </a>
      </div>
    </div>
    <div class="clearfix"></div> */}
    <Menu songs={this.state.songs} />
    <Menu songs={this.state.songs1} />
    </div></Container>
  );

}
}



export default Home;