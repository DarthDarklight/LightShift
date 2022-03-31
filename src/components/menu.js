import React from 'react';
import { Container, Media, Row, Col, Button } from 'reactstrap';
import './media.css';
import './Gallery.css';
import withContext from '../withContext';
import SongItem from './SongItem';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";


const Menu = props => {
  const { songs } = props.context;
 

return(
  <>
  	<Container>
    {/* <Media> */}
    <div className='menu-desc'>
        <h2>LIGHT SHIFT Discography</h2>
        <span class="border"></span>
    <p>Discover all the songs on Spotify</p>
    <hr></hr>
    </div>
    <div className="responsive">
      <div className='song-column columns is-multiline'>
      <div className="gallery">
    
      
    {songs && songs.length ? (
            songs.map((song, index) => (
              <SongItem
                song={song}
                key={index}
              />
            ))
          ) : (
            <div className="song-column">
              <span className="title has-text-grey-light">
                No songs found!
              </span>
            </div>
          )}
          </div>


        {/* <div className="frame">
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
         </div>  */}
             
      </div>
    </div>
    <div class="clearfix"></div>
    {/* </Media> */}
    </Container>
    
  </>
);
};
export default withContext(Menu);



// class Menu extends React.Component {
// 	constructor(props){
// 		super(props);
		
// 		this.state = {	
// 			};
// 	}
	
// 	render(){
		
// 		const menu = this.props.songs.map((song) => {
// 			return(
                
                    
// 				<div key={song.id}  >	
                
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
		// 			<Container>
    // <Media>
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>        
    //   </div>
    // </div>
	
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay" id={song.id}>
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //        {/* 
    //         data.map(d => 
    //             <Song d={d} >
    //           )
    //        */}
    //     </a>
    //      </div> 
    //       </Container>        
    //   </div>
    // </div>
	
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>         
    //   </div>
    // </div>
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>   
    //   </div>
    // </div>
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>        
    //   </div>
    // </div>
	
    // <div className="responsive">
    //   <div className="gallery">
    //     <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>   
    //   </div>
    // </div>
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>         
    //   </div>
    // </div>
	
    // <div className="responsive">
    //   <div className="gallery">
	  // <Container>
    //     <div className="frame">
    //     <a target={"_blank"} href={"./Logo.png"} >      
		// <img src={song.image} alt={song.name} className="logo"></img>
    //       <div class="overlay">
    //         <Media heading className="title">{song.name} </Media>
    //        <p ><strong>Album - </strong>{song.album}</p>
    //        <p ><strong>Release - </strong>{song.release}</p>
		// 			 <p ><strong>Duration - </strong>{song.duration}</p> 
    //        <Media><Button variant="success" size="lg" href={song.link}>Listen on Spotify</Button></Media>
    //        </div>  
    //     </a>
    //      </div> 
    //       </Container>   
    //   </div>
    // </div>
// 	<div class="clearfix"></div>
// 	</Media>
    
//     </Container>
						
					
// 				</div>
               
// 			);
// 		});
		
// 		return(
				
// 					<Media >
// 						{menu}
// 					</Media>
				
			
// 		);
// 	}
// }

// 'Keys' - It helps identify which items have changed, are added or removed.
// ReactDOM.render(
// 	<BrowserRouter>
// 	  <Menu />
// 	</BrowserRouter>,
// 	document.getElementById("root")
//   );
// export default Menu;