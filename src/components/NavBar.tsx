//import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  logo: string;
}

function NavBar({ logo }: NavBarProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeMenu = () => setIsNavCollapsed(true);
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm navbar-dark navbar-custom"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
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
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" onClick={closeMenu} to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={closeMenu} to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                onClick={closeMenu}
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                onClick={closeMenu}
                className="btn btn-outline-success"
              >
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
