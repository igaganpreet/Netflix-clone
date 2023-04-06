import React, {useState} from "react";
import Genre from "./Genre";

function Section2() {
   
    const movieList=[{movieImg:"https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg",movieName:"kungfu panda"},
                    {movieImg:"https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg",movieName:"friends"},
                    {movieImg:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",movieName:"oblivion"},
                    {movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU",movieName:"missionImpossible"},
                    {movieImg:"https://wallpapercave.com/wp/wp4068891.jpg", movieName:"Johny English"},
                    {movieImg:"https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg", movieName:"Kungfu Panda"},
                    {movieImg:"https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg",movieName:"friends"},
                    {movieImg:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",movieName:"oblivion"},
                    {movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU",movieName:"missionImpossible"},
                    {movieImg:"https://wallpapercave.com/wp/wp4068891.jpg", movieName:"Johny English"},
                    {movieImg:"https://moviestudio.files.wordpress.com/2008/09/kungfupanda-poster-2.jpg",movieName:"kungfu panda"},
                    {movieImg:"https://mypostercollection.com/wp-content/uploads/2018/03/Friends-F.R.I.E.N.D.S-poster.jpg",movieName:"friends"},
                    {movieImg:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",movieName:"oblivion"},
                    {movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHT6y-DcaBUPBdcPcUn4SenBo_pZ_p5D-1g&usqp=CAU",movieName:"missionImpossible"},
                    {movieImg:"https://wallpapercave.com/wp/wp4068891.jpg", movieName:"Johny English"}
                ]

    
return <div className="section2" id="section2">
            <Genre name="Popular on Netflix" list={movieList} />
            <Genre name="Trending Now" list={movieList} />
            <Genre name="Wacky Comedy" list={movieList} />
            <Genre name="Action and Adventure" list={movieList} />
            <Genre name="Bollywood Movies" list={movieList} />
    </div>
}  
export default Section2;