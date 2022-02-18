import React, { useRef } from 'react';
import logo from './media/Logo.png';
import './App.css';
import './components/media.css'
import {  NavbarBrand,Container } from 'reactstrap';
import Menu from './components/menu';
import { ALBUM1 } from './shared/songs';
import { ALBUM2 } from './shared/songs';
import Greet from './components/greet';
// import Navbar from 'react-bootstrap/Navbar'
import { Nav,Col,Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';
import ReactDOM from "react-dom";
import SocialFollow from "./SocialFollow"
import FooterPage from './components/footer';
// import Navigation from './components/navigation';
import Home from './pages/Home';
import Timer from './pages/PostVoid';
import Controls from './components/Controls';
import ImpVideo from './components/implementVideoPlayer';
import VideoPlayer from './components/implementVideoPlayer';
import AboutUs from './components/AboutUs';
import Forum from './components/Forum';
import Merch from './pages/Merch';
import PostVoid from './pages/PostVoid';
import Navbar from './components/navigation';

// import  PostVoid from "./pages/PostVoid ";

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			songs: ALBUM1,
      songs1: ALBUM2
		};

	}
	
	render(){
		return (
			<div className='App'>
        {/* Navigation bar and menu start */}
        
        <Router>
        <Navbar className="navbar " />
        {/* <Navbar.Brand href="#home"> */}
            {/* <img 
             alt=""
             src={logo}        
             width="30"
             height="30"
             className="d-inline-block align-top"
            />{' '}
           <b>Light Shift</b>
          </Navbar.Brand>       */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/merch' component={Merch} />
        <Route path='/postvoid' component={PostVoid} />
        <Route path='/forum' component={Forum} />
      </Switch>
        </Router>
        <Container >
           {/* <SocialFollow /> */} 
        {/* 
				<Navbar  className="navbar fixed-top" id="NavBar">
              
          <Navbar.Brand href="#home">
            <img 
             alt=""
             src={logo}        
             width="30"
             height="30"
             className="d-inline-block align-top"
            />{' '}
           <b>Light Shift</b>
          </Navbar.Brand>      
          <Nav  >      
      <Nav.Link href="#home">Home</Nav.Link>     
      <Nav.Link href="#shop">Merch</Nav.Link> 
      <Nav.Link href="#postvoid">Post Void</Nav.Link>
      <Nav.Link href="#banda">Banda</Nav.Link>
    
        
      
     */}
      {/* <Navigation/> */}
      {/* Navigation bar and menu end */}
      
    <SocialFollow /> 
      </Container>
        <ImpVideo/>   
        <Container> 
        <Home/>
        </Container>  
        <AboutUs/>
        <Forum/>
        <FooterPage/>
			</div>
		);
	}
}
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


export default App;