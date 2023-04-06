import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import { RiFacebookFill } from 'react-icons/ri'
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return <div className="footer">
        <div className="socialIcons">
            <a href="www.facebook.com"><RiFacebookFill style={{ color: "#ffffff", fontSize:"1.7em"}}/></a>
            <a href="www.instagram.com"><InstagramIcon style={{ color: "#ffffff", fontSize:"1.7em"}}/></a>
            <a href="www.twitter.com"><TwitterIcon style={{ color: "#ffffff", fontSize:"1.7em"}}/></a>
            <a href="www.youtube.com"><YouTubeIcon style={{ color: "#ffffff", fontSize:"1.7em"}}/></a>
        </div>
        <div className="footerContainer">
            <div className="footerDetails">
                <a className="footerLinks" href="#">Audio Description</a>
                <a className="footerLinks" href="#">Investor Realtions</a>
                <a className="footerLinks" href="#">Legal Notices</a>
            </div>
            <div className="footerDetails">
                <a className="footerLinks" href="#">Help Centre</a>
                <a className="footerLinks" href="#">Jobs</a>
                <a className="footerLinks" href="#">Cookie Preferences</a>
            </div>
            <div className="footerDetails">
                <a className="footerLinks" href="#">Gift Cards</a>
                <a className="footerLinks" href="#">Terms of Use</a>
                <a className="footerLinks" href="#">Corporate Information</a>
            </div>
            <div className="footerDetails">
                <a className="footerLinks" href="#">Media Centre</a>
                <a className="footerLinks" href="#">Privacy</a>
                <a className="footerLinks" href="#">Contact Us</a>
            </div>
        </div>
        <button className="footerButton">Service Code</button>
        <p className="footerDesc">@ Netflix clone</p>
  </div>;
}
export default Footer;
                