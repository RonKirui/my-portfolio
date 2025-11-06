//import React from "react";

import { Link } from "react-router-dom";

interface NavBarProps {
  logo: string;
}

function NavBar({ logo }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to={"/"}>
          <img
            src={logo}
            className="logo img-fluid w-100 rounded-circle"
            alt="RK"
          ></img>
        </Link>
        <button
          className="navbar-toggler btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-success">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
