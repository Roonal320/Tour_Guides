import React from 'react';
import Avatar from "@material-ui/core/Avatar"

// Importing css properties
import "./GuideCards.css";

function GuideCards(props) {

    const guideName= props?.name; /* getting name from DB */

    // getting city and state from DB and changing case of  city and state and combining them to var location 

    var city= props?.location?.city;
        city= city?.charAt(0)?.toUpperCase() + city?.slice(1,city?.length)?.toLowerCase();

    var state= props?.location?.state;
        state= state?.charAt(0)?.toUpperCase() + state?.slice(1,state?.length)?.toLowerCase();

    var location = city+", "+state;

    // handleClick from div

    function handleClick(e){
        e.preventDefault();
        alert("I got clicked");
    }


    
    return(
       
        <div >
        
        <button onClick={handleClick} className="btn_card">
        <div><Avatar alt={guideName?.charAt(0)} src={props?.image}>{guideName?.charAt(0)}</Avatar></div>
        <div style={{width:"100%"}}>
            <div className="info">
                    <div>
                        <span className="Card_Name" >{props?.name}</span>
                        <span ><p>{location}</p></span>
                    </div>
                    <div>
                        <span className="price">{props?.price}</span>
                    </div>
            </div>
            <div className="about">
                <p>{props?.about}</p>
            </div>
            <div className="ratings">
                <span className="rating_prop">Review <sapn>{props?.review}</sapn></span>
                <span className="rating_prop">Ratings <span>{props?.rating}</span></span>

            </div>
        </div>
        </button>
        </div>
        
       
    );
}

export default GuideCards;