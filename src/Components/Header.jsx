import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Header() {
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
  {/* <li>{avatar}</li>
  <li><ArrowDropDownIcon /></li> */}
<li>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   {avatar}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">{avatar}Name1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">{avatar}Name2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">{avatar}Name3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</li>
</ul>

    </div>
  </div>;
}
export default Header;
