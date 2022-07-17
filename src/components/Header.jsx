import "@styles/Header.css";
import logo from "../assets/Rick-And-Morty-Transparent-Images.png";
import logoMini from "../assets/logo-mini.png";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <nav>
      <div>
        <NavLink to={"/"}>
          <img src={logoMini} alt="logo" className="logo-mini" />
        </NavLink>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
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
    </nav>
  );
};

export default Header;
