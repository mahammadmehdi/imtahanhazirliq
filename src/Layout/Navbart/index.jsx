import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <ul className="navbar"> 
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
        <li><NavLink>FAQ</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
