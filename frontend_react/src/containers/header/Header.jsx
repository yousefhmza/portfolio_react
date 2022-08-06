import React from "react";

import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const scaleVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const circlesImages = [
    images.flutter,
    images.react,
    images.html,
    images.javascript,
  ];

  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I'm </p>
              <h1>Yousef Hamza</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p>Mobile app developer</p>
            <p>UI/UX designer</p>
            <p>Junior web developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="Profile_bg" />
        <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        transition={{ duration: 0.5 }}
      >
        {circlesImages.map((circle, index) => (
          <div key={`circle-${index}`} className="circle-cmp app__flex">
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
