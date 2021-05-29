import React from "react";
import Header from "./Header";
import Movie from "./video/movie.mp4";
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InfoIcon from '@material-ui/icons/Info';

function Section1() {
  return <div className="section1" >
  <Header />
  <div className="videoBox">
<video autoPlay loop muted>
    <source src={Movie} type="video/mp4" />
</video>

<div id="descriptionLeft">
  <div className="movieTitle"><img src={process.env.PUBLIC_URL + '/images/movieImage.png'} alt="Movie Title" /></div>
<p className="movieDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ultricies leo. </p>
<Button variant="contained" color="default" style={{backgroundColor:"white", color:"black", textTransform: 'none', margin:"0 2%", padding:"1% 6%"}}><ArrowRightIcon fontSize="medium" />Play</Button>
<Button variant="contained" color="default" style={{textTransform: 'none', opacity:"0.8", backgroundColor:"gray", color:"white", padding:"1% 6%"}}><InfoIcon />More Info</Button>
</div>


<div id="descriptionRight">
  <Button id="volumeButton"><img class="volImg" src={process.env.PUBLIC_URL + '/images/volumeUp.png'} alt="Movie Title" /></Button>

  <div className="ageRating">6+</div>

</div>
    </div>
  </div>;
}
export default Section1;
