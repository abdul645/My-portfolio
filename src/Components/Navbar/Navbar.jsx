import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { MdWhatsapp } from "react-icons/md";

import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
            <img src={getImageUrl("nav/logo.png")} alt="logo" className={styles.logo} />
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                {/* ⬇️this means if menuOpen is false than ⬇️ styles.menuOpen is not applied if it is true than it will applied */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://wa.me/9634003802"
                     className={styles.contactBtn}><MdWhatsapp className={styles.wtsIcon}/> Chat</a></li>
                </ul>
            </div>
        </nav>
    )
}

