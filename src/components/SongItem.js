import React from 'react';
import { Container, Media, Row, Col, Button } from 'reactstrap';
import './media.css';
import IMG from './SongImage';
import pd from '../media/polisheddirt.png'
import ed from '../media/cover.png'


const SongItem = props => {
    const { song } = props;
    
    return (
        <div className='song-column is-half'>
            <div className='song-box'>
        <div className="frame">
        <a target={"_blank"} href={"../media/cover.png"} >      
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
         </div>
        </div>
    );
  };
//   function GetSongImage(props) { 
//     const { song } = props;
//       if (song.id==6) {
//               return pd
//           } else {
//               return ed
//           }  
//   }

  export default SongItem;