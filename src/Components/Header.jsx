import React,{useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import HoverMenu from "./HoverMenu";


function Header() {

   const [divStyle, setDivStyle] = useState({display: 'none'});

  const [arrowStyle, setArrowStyle] = useState({animationName:''});

function handleMouseOver(){
  
}




    const headerItems=["Home","TV Shows","Movies","New & Popular","My List"]
    const giftIcon=<img src="https://img.icons8.com/material-outlined/90/ffffff/gift--v1.png" alt="gift"/>
    const avatar=<img className="avatarImg" src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="logo" />



  return <div className="header">
    <div className="leftHeader">
  <ul>
 <li> <img src={process.env.PUBLIC_URL + '/images/NetflixLogo.png'} alt="logo" /></li>
        {headerItems.map((item)=>{
            return <li>{item}</li>
        })
        }
    </ul>
  </div>
    <div className="rightHeader">
<ul>
  <li><SearchIcon fontSize="medium" /></li>
  <li>CHILDREN</li>
  <li>{giftIcon}</li>
  <li><NotificationsIcon fontSize="medium" /></li>
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
