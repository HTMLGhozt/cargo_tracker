import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-light bg-light" style={{ margin: "10px" }}>
          <h1>io-cargo</h1>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <Link to="/login">Profile</Link>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default NavBar;
