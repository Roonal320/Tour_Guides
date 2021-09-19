import React from 'react';
import "./Header.css";

function Header(){


    return(<div className="navbar">

        <div className="Logo">
            <h1>Logo</h1>
        </div>

        <div className="sideLinks">

       
            <div className="sideLinks_content"> About</div>
            <div className="sideLinks_content"> Contact Us</div>
            <div className="sideLinks_content"> Sign in</div>
            <div className="sideLinks_content"> Sign up</div>

        </div>

    </div>);
}

export default Header;