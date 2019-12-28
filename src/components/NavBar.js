import React from "react";
import { NavLink, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light bg-light"
        style={{ margin: "10px" }}
      >
        <h1>io-cargo</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              role="tab"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              activeClassName="active"
              className="nav-link"
              role="tab"
              to="/login"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              role="tab"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
