import React from 'react';

// import css 
import "./Footer.css";

// import icons
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png'
import twitter from './icons/twitter.png'

function Footer(){

    return(
    <div className="footer_wrapper">
        <div className="footer_content">

            <div className="social_media">
                
                <span><h4>Social Media</h4></span>
                <span>
                <img className="footer_icons" src={facebook} alt="Facebook" />
                <img className="footer_icons" src={instagram} alt="Instagram" />
                <img className="footer_icons" src={twitter} alt="Twitter" />
                </span>
                <span className="copyright"> &copy; XYZ 2021</span>
               
            </div>

            <div className="getting_started">
                <h5>GETTING STARTED</h5>
                <ul>
                    <li>Signup as a guide</li>
                    <li>signup as a tourist</li>
                    <li>Press</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>


            <div className="policies">
                <h5>POLICIES</h5>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                </ul>
            </div>

        </div>

    </div>
    );

}

export default Footer;