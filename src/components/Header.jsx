import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import banner from "../assets/Rick-And-Morty-Transparent-Background.png"
import logo from "../assets/Rick-And-Morty-Transparent-Images.png"


const Header = () => {
  return (
    <nav>
      <img src= {logo} alt="logo" className="logo" />
      <div className="navbar-left">
        <ul className="navbar-right">
          <li>
            <a href="/">Characters</a>
          </li>
          <li>
            <a href="/">Locations</a>
          </li>
          <li>
            <a href="/">Episodes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
