import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return <div className="footer">
        <div className="socialIcons">
            <a href="www.facebook.com"><FacebookIcon style={{ color: "#808080", fontSize:"2.3em"}}/></a>
            <a href="www.instagram.com"><img src="https://img.icons8.com/ios-filled/32/808080/instagram--v1.png"/></a>
            <a href="www.twitter.com"><TwitterIcon style={{ color: "#808080", fontSize:"2.3em"}}/></a>
            <a href="www.youtube.com"><YouTubeIcon style={{ color: "#808080", fontSize:"2.3em"}}/></a>
        </div>
        <div class="footerDetails">
            <div class="grid-container">
                <div class="grid-item"><a href="#">Audio and Subtitles</a></div>
                <div class="grid-item"><a href="#">Audio Description</a></div>
                <div class="grid-item"><a href="#">Media Center</a></div>
                <div class="grid-item"><a href="#">Investors Relations</a></div>
                <div class="grid-item"><a href="#">Privacy</a></div>
                <div class="grid-item"><a href="#">Legal Notices</a></div>
                <div class="grid-item"><a href="#">Contact us</a></div>
            </div>
            <div class="grid-container">
                <div class="grid-item"><a href="#">Help Center</a></div>
                <div class="grid-item"><a href="#">Gift Cards</a></div>
                <div class="grid-item"><a href="#">Jobs</a></div>
                <div class="grid-item"><a href="#">Terms of Use</a></div>
                <div class="grid-item"><a href="#">Cookie Preferences</a></div>
                <div class="grid-item"><a href="#">Corporate Information</a></div>
            </div>
        </div>
  </div>;
}
export default Footer;
