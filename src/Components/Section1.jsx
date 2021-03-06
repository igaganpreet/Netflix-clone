import React, {useState} from "react";
import Movie from "./video/movie.mp4";
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InfoIcon from '@material-ui/icons/Info';

function Section1() {
  
const infoIcon=<img src="https://img.icons8.com/android/24/ffffff/info.png" style={{marginRight:0.5+"em"}}/>;
// const [mute, updateMute]=useState("unmuted");
  return <div className="section1" >

  <div className="videoBox" >
      <video autoPlay loop unmuted>
        <source src={Movie} type="video/mp4" />
      </video>

    <div id="descriptionLeft">
      <div className="movieTitle"><img src={process.env.PUBLIC_URL + '/images/movieImage.png'} alt="Movie Title" /></div>
        <p className="movieDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ultricies leo. </p>
        <Button variant="contained" color="default" style={{backgroundColor:"white", color:"black", textTransform: 'none', margin:"0 2%", padding:"1% 6%"}}><ArrowRightIcon fontSize="medium" />Play</Button>
        <Button variant="contained" color="default" style={{textTransform: 'none',backgroundColor:"#39393999", color:"white", padding:"1% 6%"}}>{infoIcon}More Info</Button>
    </div>


    <div id="descriptionRight">
      <Button id="volumeButton"><img class="volImg" src={process.env.PUBLIC_URL + '/images/volumeUp.png'} alt="Movie Title" /></Button>
      <div className="ageRating">6+</div>
    </div>
  </div>
</div>;
}
export default Section1;
