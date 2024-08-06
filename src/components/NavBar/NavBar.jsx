import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css" // Import the CSS module
import axIcon from "../../assets/ax2.png";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar() {
  const [click, setClick] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <NavLink exact to="/" className={styles.navLogo}>
            <img src={axIcon} alt="ax2" />
          </NavLink>
          <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/about"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/blog"
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                Api
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to={isLoggedIn ? "/userdetails" : "/login"}
                activeClassName={styles.active}
                className={styles.navLinks}
                onClick={handleClick}
              >
                {isLoggedIn ? "Your Account" : "Login"}
              </NavLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}></span>
            ) : (
              <span className={styles.icon}></span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
