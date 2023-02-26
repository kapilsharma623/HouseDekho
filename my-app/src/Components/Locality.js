import React from "react";
import UpArrow from '../images/upArrow.png';

function locality() {    
    return(
        <div className="Locality-Container">
            <div className="Locality-Details">
                <h1>Gachibowli</h1>
                <h4>₹ 8,500/sq.ft</h4>
            </div>
            <div className="Rate-Arrow">
                <img src={UpArrow}/>
            </div>
        </div>
    )
    
}

export default locality;