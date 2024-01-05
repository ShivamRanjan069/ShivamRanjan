import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        SHIVAM
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setmenuOpen(!menuOpen)}
        />
         <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setmenuOpen(false)}
        >
          <li>
            <a >About</a>
          </li>
          <li>
            <a >Skills</a>
          </li>
          <li>
            <a >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
