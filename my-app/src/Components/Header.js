import React from "react";
import menu from '../images/menu.png';
import profile from '../images/profile.png';

function header() {
    function menuBtnClick(){
      alert("Menu Button Clicked");
    }
    function profileBtnClick(){
      alert("Profile Button Clicked");
    }

    return(
        <div className="HeaderArea">
            <div className="Menu">
              <img src={menu} alt="menu button" onClick={menuBtnClick}/>
            </div>
            <div className="Logo">
              <h1>HouseDekho</h1>
            </div>
            <div className="Profile">
              <img src={profile} alt="profile button" onClick={profileBtnClick}/>
            </div>
        </div>
    )
    
}

export default header;