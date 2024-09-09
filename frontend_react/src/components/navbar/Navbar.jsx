import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const items = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div> */}
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setIsMenuVisible(true)} />

        {isMenuVisible && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setIsMenuVisible(false)} />
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setIsMenuVisible(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
