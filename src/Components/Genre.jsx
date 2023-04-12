import React, {useState} from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import supscroll from "../supscroll";



function Genre(props) {
    document.addEventListener("DOMContentLoaded", function (event) {
        let elem = document.querySelector('.supscroll .supscroll-wrapper');
        supscroll(elem);
    });

    const [arrowSize, setArrowSize] = useState({fontSize:"1.7em", marginTop:"0%"});
    const [genreClass, setGenreClass] = useState("");
    
return <div className="Genre" id="Genre">
    <div className="genre" onMouseEnter={e => {
        console.log("mouse over");
                        setArrowSize({fontSize:"1em",marginTop:"auto"});
                        setGenreClass("genreAnimationforward");
                    }}
                    onMouseLeave={e => {
                        setArrowSize({fontSize:"1.7em",marginTop:"0%"});
                        setGenreClass("genreAnimationbackward");
                    }}>
        <h3 ><a href="#" >{props.name}</a></h3>
        <h5 className={genreClass}><a href="#" >Explore All</a></h5>
    <ChevronRightIcon className="genreRightIcon" style={arrowSize}/>
    </div>
    <div className="supscroll" id="supscroll">
        <div className="supscroll-wrapper" id="supscroll-wrapper">
            {props.list.map((item)=>{
                return <a href="#"><img className="genreMovieImg" src={item.movieImg} alt={item.movieName}></img></a>
            })}    
        </div>
        </div>
</div>
}
export default Genre;