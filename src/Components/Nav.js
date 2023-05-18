import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <NavLink to="/" className="home">
        Home
      </NavLink>
      <NavLink to="/Student" className="home">
        Student
      </NavLink>
      <NavLink to="/Contact" className="home">
        Contact
      </NavLink>
    </div>
  );
}

export default Nav;
