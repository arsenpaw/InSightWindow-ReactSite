import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./NavBar.module.css"; // Import the CSS module
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
                className={({ isActive }) =>
                  classNames(styles.navLinks, { [styles.navLinksActive]: isActive })
                }
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/about"
                className={({ isActive }) =>
                  classNames(styles.navLinks, { [styles.navLinksActive]: isActive })
                }
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to="/blog"
                className={({ isActive }) =>
                  classNames(styles.navLinks, { [styles.navLinksActive]: isActive })
                }
                onClick={handleClick}
              >
                Api
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                exact
                to={isLoggedIn ? "/userdetails" : "/login"}
                className={({ isActive }) =>
                  classNames(styles.navLinks, { [styles.navLinksActive]: isActive })
                }
                onClick={handleClick}
              >
                {isLoggedIn ? "Your Account" : "Login"}
              </NavLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            <span className={styles.icon}></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;