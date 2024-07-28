import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import  axIcon from "../assets/ax2.png";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={axIcon} alt="ax2" className="logo-icon" />
          </NavLink>
            </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  exact
                  to="/Login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
                <span className="icon">

              </span>
            ) : (
                <span className="icon">

              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;