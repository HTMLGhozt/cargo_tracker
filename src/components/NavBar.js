import React from "react";
import { NavLink, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <Route>
      <div>
        <nav
          className="navbar navbar-light bg-light"
          style={{ margin: "10px" }}
        >
          <h1>io-cargo</h1>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <NavLink to="/">Home</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <NavLink to="/login">Profile</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <NavLink to="/contact">Contact</NavLink>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Route>
  );
};

export default NavBar;
