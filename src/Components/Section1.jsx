import React from "react";
import Header from "./Header";
import Movie from "./video/movie.mp4";
import Button from '@material-ui/core/Button';


function Section1() {
  return <div className="section1" >
  <Header />
  <div className="videoBox">
<video autoPlay loop muted>
    <source src={Movie} type="video/mp4" />
</video>

<div id="test"></div>


{/* <div className="movieTitle">movieTitle</div>
<p className="movieDescription">movie description</p>
<Button id="test1" variant="contained" color="secondary">Button1</Button>
<Button className="test">Button2</Button> */}
    </div>
  </div>;
}
export default Section1;
