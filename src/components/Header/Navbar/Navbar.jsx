import React from 'react'
import Logo from "../../../assets/img/tv.png"
import SearchIcon from "../../../assets/img/search-icon.png"
import Hamburger from "../../../assets/img/hamburger.png"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>MovieBox</span>
            </div>
            <div className="search">
                <input placeholder='What do you want to search?' className='search-input' type="text" />
                <img src={SearchIcon} className='search-icon' alt="search icon" />
            </div>
            <div className="menu">
                <span>Sign in</span>
                <img src={Hamburger}  alt="hamburger" />
            </div>
        </nav>
    )
}
