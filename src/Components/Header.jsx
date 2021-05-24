import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Header() {
    const headerItems=["Home","TV Shows","Movies","New & Popular","My List"]
    const giftIcon=<img src="https://img.icons8.com/material-outlined/90/ffffff/gift--v1.png" alt="gift"/>
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
  <li><SearchIcon /></li>
  <li>CHILDREN</li>
  <li>{giftIcon}</li>
  <li><NotificationsIcon /></li>
  <li><InsertEmoticonIcon /></li>
</ul>

    </div>
  </div>;
}
export default Header;
