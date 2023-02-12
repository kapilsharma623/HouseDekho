import React from "react";
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function footer() {
    return(
        <div class = "FooterArea">
        <div class = "LeftBox">
          <h2>Company</h2>
          <h2>About Us</h2>
          <h2>Contact Us</h2>
          <h2>Feedback</h2>
        </div>
        <div class = "RightBox">
          <h1>Contact Us</h1>
          <h2>Number - 9790746565</h2>
          <h2>Email Id - housedekho362@gmail.com</h2>
          <h2>Connect With Us</h2>
          <div>
            <img src={facebook} alt="facebook button" id ="FacebookBtn"/>
            <img src={youtube} alt="youtube button" id ="SocialMediaBtn"/>
            <img src={twitter} alt="twitter button" id ="SocialMediaBtn"/>
            <img src={instagram} alt="instagram button" id ="SocialMediaBtn"/>
          </div>
        </div>
      </div>
    )
    
}

export default footer;