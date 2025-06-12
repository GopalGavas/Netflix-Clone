import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";

import "./Navbar.css";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="search-icon svg" className="icons"></img>
        <p>Children</p>
        <img src={bellIcon} alt="search-icon svg" className="icons"></img>
        <div className="navbar-profile">
          <img src={profileImage} alt="" className="profile"></img>
          <img src={caretIcon} alt=""></img>
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
