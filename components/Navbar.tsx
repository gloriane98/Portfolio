"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import styles from "../styles/navbar.module.css";
import { HiOutlineBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("open menu");
  };
  return (
    <header className={styles.navbarBG}>
      <nav className={styles.navbar}>
        <a href="/">
          <Image src={logo} alt="Logo du developpeur" />
        </a>
        <ul
          className={`${styles.listItems} ${
            !nav ? `${styles.hiddenDesktopMenu}` : ``
          }`}
        >
          <li>
            <a href="/" className={styles.link}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/apropos" className={styles.link}>
              A propos
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Réalisations
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              CV
            </a>
          </li>
          <li>
            <a href="#" className={` ${styles.contactBtn}`}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className={styles.langBtn}>
              EN
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className={styles.mobileMenu}>
          <HiOutlineBars3BottomRight
            size={30}
            style={{ color: "#2c7ce6", cursor: " pointer" }}
          />
        </div>
      </nav>
      {/**Mobile Menu */}
      {nav && (
        <>
          <div className={nav ? `${styles.bgMenu}` : ``}>
            <div className={`${styles.openMenu}`}>
              <div className={styles.blocNav}>
                <a href="/">
                  <Image src={logo} alt="Logo du developpeur" />
                </a>
                <div onClick={handleNav}>
                  <HiMiniXMark
                    size={30}
                    style={{ color: "#2c7ce6", cursor: " pointer" }}
                  />
                </div>
              </div>
              <div className={styles.menusPosition}>
                <nav>
                  <ul className={`${styles.spaceMenu}`}>
                    <li>
                      <a href="/" className={`${styles.link}`}>
                        Accueil
                      </a>
                    </li>
                    <li>
                      <a href="/apropos" className={styles.link}>
                        A propos
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.link}>
                        Réalisations
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.link}>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.link}>
                        CV
                      </a>
                    </li>
                    <li>
                      <a href="#" className={` ${styles.contactBtn}`}>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.langBtn}>
                        EN
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
