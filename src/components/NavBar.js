import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar" >
    <NavLink 
    to= "/"
    >
      home
    </NavLink>
    <NavLink
    to= "/movies"
    >
      movies


    </NavLink>
    <NavLink
    to= "/directors"
    >

directors
    </NavLink>
    <NavLink
    to="/actors"
    
    >
      actors

    </NavLink>
  </div>;
}

export default NavBar;
