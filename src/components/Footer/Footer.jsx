import React from 'react'
import FacebookIcon from "../../assets/img/facebook-logo.png"
import InstagramIcon from "../../assets/img/instagram-logo.png"
import TwitterIcon from "../../assets/img/Twitter.png"
import "./Footer.css"

export const Footer = () => {
    return (

        <footer className='footer'>
            <div className='footer-content'>
                <div className="social-media">

                    <a rel="stylesheet" href="https://facebook.com">
                        <img src={FacebookIcon} alt="facebook icon" />
                    </a>  
                    <a rel="stylesheet" href="https://facebook.com">
                        <img src={InstagramIcon} alt="facebook icon" />
                    </a>  
                    <a rel="stylesheet" href="https://instagram.com">
                        <img src={TwitterIcon} alt="facebook icon" />
                    </a>  
                    <a rel="stylesheet" href="https://facebook.com">
                        <img src={InstagramIcon} alt="facebook icon" />
                    </a>  


                </div>
                <div className="footer-links">Conditions of use  Privacy  Policy   Press </div>
                <div className="copyright">copy right</div>
            </div>
        </footer>
    )
}
