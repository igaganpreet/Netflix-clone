import React, {useState} from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import supscroll from "../supscroll";


function Section2() {
    document.addEventListener("DOMContentLoaded", function (event) {
        let elem = document.querySelector('.supscroll .supscroll-wrapper');
        supscroll(elem);
    });

    const [arrowSize, setArrowSize] = useState({fontSize:"1.7em", marginTop:"0%"});
    const [genreClass, setGenreClass] = useState("");
    
return <div className="section2" id="section2">
<div className="genre" onMouseEnter={e => {
       console.log("mouse over");
                      setArrowSize({fontSize:"1em",marginTop:"auto"});
                      setGenreClass("genreAnimationforward");
                  }}
                  onMouseLeave={e => {
                      setArrowSize({fontSize:"1.7em",marginTop:"0%"});
                      setGenreClass("genreAnimationbackward");
                  }}>
  <h3 ><a href="#" >Comedies</a></h3>
  <h5 className={genreClass}><a href="#" >Explore All</a></h5>
  <ChevronRightIcon className="genreRightIcon" style={arrowSize}/>
</div>



    <div class="supscroll" id="supscroll">
      <div class="supscroll-wrapper" id="supscroll-wrapper">
          <a href="#"><img src="https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg" alt="kungfu panda"></img></a>
          <a href="#"><img src="https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg" alt="friends"></img></a>
          <a href="#"><img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="oblivion"></img></a>
          <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU" alt="missionImpossible"></img></a>
          <a href="#"><img src="https://wallpapercave.com/wp/wp4068891.jpg" alt="jhony english"></img></a>
          <a href="#"><img src="https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg" alt="kungfu panda"></img></a>
          <a href="#"><img src="https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg" alt="friends"></img></a>
          <a href="#"><img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="oblivion"></img></a>
          <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU" alt="missionImpossible"></img></a>
          <a href="#"><img src="https://wallpapercave.com/wp/wp4068891.jpg" alt="jhony english"></img></a>    
      </div>
    </div>


    {/* <div className="genre">
    <h3><a href="#">Action & adventure</a></h3>
    <ChevronRightIcon />
</div>
    <div class="supscroll" id="supscroll">
      <div class="supscroll-wrapper" id="supscroll-wrapper">
          <a href="#"><img src="https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg" alt="kungfu panda"></img></a>
          <a href="#"><img src="https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg" alt="friends"></img></a>
          <a href="#"><img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="oblivion"></img></a>
          <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU" alt="missionImpossible"></img></a>
          <a href="#"><img src="https://wallpapercave.com/wp/wp4068891.jpg" alt="jhony english"></img></a>
          <a href="#"><img src="https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg" alt="kungfu panda"></img></a>
          <a href="#"><img src="https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg" alt="friends"></img></a>
          <a href="#"><img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" alt="oblivion"></img></a>
          <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU" alt="missionImpossible"></img></a>
          <a href="#"><img src="https://wallpapercave.com/wp/wp4068891.jpg" alt="jhony english"></img></a>    
      </div>
    </div> */}
</div>
}
export default Section2;