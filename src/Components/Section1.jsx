import React, {useState} from "react";
import Movie from "./video/movie.mp4";
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'

function Section1() {

const infoIcon=<img src="https://img.icons8.com/android/24/ffffff/info.png" alt="infoIcon" style={{marginRight:0.5+"em"}}/>;
const playIcon=<img src="https://img.icons8.com/ios-filled/24/null/play--v1.png" alt="playIcon" style={{marginRight:0.5+"em"}}/>
const muteIcon=<img className="volImg" src="https://img.icons8.com/ios/100/ffffff/mute--v1.png" alt="mute icon"/>
const unmuteIcon=<img className="volImg" src="https://img.icons8.com/ios/100/ffffff/room-sound.png" alt="unmute icon" />

const [mute, toggleMute]=useState(true)

function volumeButtonClicked(){
  toggleMute(!mute)
}


return <div className="section1" >

  <div className="videoBox" >
      <ReactPlayer className="video" url={Movie} playing={true} loop={true} controls={false} muted={mute? true : false} width='100vw' height='100vh' /> 

    <div id="descriptionLeft">
      <div className="movieTitle"><img src={process.env.PUBLIC_URL + '/images/movieImage.png'} alt="Movie Title" /></div>
        <p className="movieDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ultricies leo. </p>
        <Button variant="contained" size="large" style={{textTransform: 'none',marginRight:'1em'}}>{playIcon}Play</Button>
        <Button variant="contained" size="large" style={{textTransform: 'none',backgroundColor:"#39393999", color:"white"}}>{infoIcon}More Info</Button>
    </div>
 
    <div id="descriptionRight">
      <Button id="volumeButton" onClick={volumeButtonClicked}>{mute? muteIcon : unmuteIcon}</Button>
      <div className="ageRating">6+</div>
    </div>
    </div>
</div>;
}
export default Section1;
