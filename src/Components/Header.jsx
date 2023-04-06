import React,{useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import HoverMenu from "./HoverMenu";



function Header() {

  const [divStyle, setDivStyle] = useState({display: 'none'});
  const [arrowStyle, setArrowStyle] = useState({animationName:''});

  const headerItems=["Home","TV Shows","Movies","New & Popular","My List","Browse by Languages "]
  const giftIcon=<img src="https://img.icons8.com/material-outlined/90/ffffff/gift--v1.png" alt="gift"/>
  const avatar=<img className="avatarImg" src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="logo" />

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 51){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
    <div className="leftnav">
      <ul>
        <li> <img src={process.env.PUBLIC_URL + '/images/NetflixLogo.png'} alt="logo" /></li>
        {
          headerItems.map((item)=>{
          return <li><a href="#">{item}</a></li>
          })
        }
      </ul>
  </div>
    <div className="rightnav">
<ul>
  <li><a href="#"><SearchIcon fontSize="medium" fontWeight="400" /></a></li>
  <li><a href="#section2">Children</a></li>
  <li><a href="#">{giftIcon}</a></li>
  <li><a href="#"><NotificationsIcon fontSize="medium" /></a></li>
<li>
<Button onMouseOver={e => {
                     setDivStyle({display: 'block'});
                     setArrowStyle({animationName:'rotateArrow'});
                 }}
                 onMouseLeave={e => {
                     setDivStyle({display: 'none'})
                     setArrowStyle({animationName:'reverseRotateArrow'});
                 }}>{avatar}<ArrowDropDownIcon id="dropdownArrow" style={arrowStyle} /></Button>

<HoverMenu avatar={avatar} style={divStyle} />


</li>
</ul>

    </div>
  </div>;




}
export default Header;
