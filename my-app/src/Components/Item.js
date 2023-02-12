import React from "react";
import houseImage from '../images/HouseImage.jpg';

function item() {
    return(
        <div class = "ItemContent">
        <div class = "ImageContent">
        <img src={houseImage} alt="House Image"/>
        </div>
        <div class = "Content">
        <div class = "PropertyNameContent">
          <h2>CyberCity WebBrook</h2>
        </div>
        <div class = "DetailsContent">
          <p>2,3 BHK</p>
        </div>
        <div class = "PriceContent">
          <p>$ 50 Lakhs</p>
        </div>
        </div>
        
      </div>
    )
    
}

export default item;