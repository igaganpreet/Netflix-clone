import React from "react";
import Header from "./Header";
import Movie from "./video/movie.mp4";
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InfoIcon from '@material-ui/icons/Info';

function Section1() {
  // const infoIcon=<img src="https://img.icons8.com/android/24/000000/info.png" alt="info icon"/>;
  return <div className="section1" >
  <Header />
  <div className="videoBox">
<video autoPlay loop muted>
    <source src={Movie} type="video/mp4" />
</video>

<div id="description">
  <div className="movieTitle"><img src={process.env.PUBLIC_URL + '/images/movieImage.png'} alt="Movie Title" /></div>
<p className="movieDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ultricies leo. </p>
<Button variant="contained" color="default" style={{backgroundColor:"white", color:"black", textTransform: 'none', margin:"0 2%"}}><ArrowRightIcon fontSize="medium" />Play</Button>
<Button variant="contained" color="default" style={{textTransform: 'none', opacity:"0.8", backgroundColor:"gray", color:"white"}}><InfoIcon />More Info</Button>
</div>


{/* <div className="movieTitle">movieTitle</div>
<p className="movieDescription">movie description</p>
<Button id="test1" variant="contained" color="secondary">Button1</Button>
<Button className="test">Button2</Button> */}
    </div>
  </div>;
}
export default Section1;
