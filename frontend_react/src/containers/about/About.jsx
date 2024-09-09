import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../../firebase";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const aboutCollection = collection(firestore, "About");
    const getAbout = async () => {
      const snapshot = await getDocs(query(aboutCollection, orderBy("order", "asc")));
      const data = snapshot.docs.map((document) => document.data());
      setAbouts(data);
    };

    getAbout();
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Good Apps</span>
        <br /> Mean <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            className="app__profiles-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
