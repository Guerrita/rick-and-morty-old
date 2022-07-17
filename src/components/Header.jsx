import React, { useState, useContext } from "react";
import "@styles/Header.css";
import logo from "../assets/Rick-And-Morty-Transparent-Images.png"
import { Link, Navigate, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <nav>
      <NavLink to={'/'}><img src= {logo} alt="logo" className="logo" /></NavLink>
      <div className="navbar-left">
        <ul className="navbar-right">
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
