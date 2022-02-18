import React from 'react';
import { Container, Media, Row, Col, Button } from 'reactstrap';
import './media.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";


class Menu extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {	
			};
	}
	
	render(){
		
		const menu = this.props.songs.map((song) => {
			return(
                
                    
				<div key={song.id}  >	
                
                    {/* <Media tag="li" >
						<Container>
							<Row>
								<Col>
								<Media left >
							<Media object src={song.image} alt={song.name} className="logo" />
								</Media>
								</Col>
								<Col>
								<Media body className="ml-3">
                            <Container className="song">
							<Media heading className="title">{song.name}</Media>
							<div ><strong>Album - </strong>{song.album}</div>
                            <div ><strong>Release - </strong>{song.release}</div>
							<div ><strong>Duration - </strong>{song.duration}</div>                           						                  
							</Container>
							</Media>
							</Col>
							</Row>
							</Container>
						</Media> */}
					<Container>
    <Media>
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>        
      </div>
    </div>
	
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay" id={song.id}>
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>        
      </div>
    </div>
	
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>         
      </div>
    </div>
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>   
      </div>
    </div>
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>        
      </div>
    </div>
	
    <div className="responsive">
      <div className="gallery">
        <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>   
      </div>
    </div>
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>         
      </div>
    </div>
	
    <div className="responsive">
      <div className="gallery">
	  <Container>
        <div className="frame">
        <a target={"_blank"} href={"./Logo.png"} >      
		<img src={song.image} alt={song.name} className="logo"></img>
          <div class="overlay">
            <Media heading className="title">{song.name} </Media>
           <p ><strong>Album - </strong>{song.album}</p>
           <p ><strong>Release - </strong>{song.release}</p>
					 <p ><strong>Duration - </strong>{song.duration}</p> 
           <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
           </div>  
        </a>
         </div> 
          </Container>   
      </div>
    </div>
	<div class="clearfix"></div>
	</Media>
    
    </Container>
						
					
				</div>
               
			);
		});
		
		return(
				
					<Media >
						{menu}
					</Media>
				
			
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.
// ReactDOM.render(
// 	<BrowserRouter>
// 	  <Menu />
// 	</BrowserRouter>,
// 	document.getElementById("root")
//   );
export default Menu;