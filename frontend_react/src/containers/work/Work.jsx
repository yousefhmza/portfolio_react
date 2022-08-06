import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("FLutter");
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);

  const categories = [
    "Flutter",
    "React Native",
    "Web Development",
    "UI/UX",
    "All",
  ];

  const workFilterHandler = (category) => {
    setActiveCategory(category);
    setAnimatedCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }]);
      if (category === "All") {
        setFilteredWorks(works);
      } else {
        setFilteredWorks(works.filter((work) => work.tags.includes(category)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text app__work-head-text">
        My <span>Work</span>
      </h2>
      <div className="app__work-filters">
        {categories.map((category, index) => (
          <div
            key={category + index}
            className={`app__work-filter-item app__flex p-text ${
              activeCategory === category ? "category-active" : ""
            }`}
            onClick={() => workFilterHandler(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <motion.div
        className="app__work-portfolio"
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filteredWorks.map((work, index) => (
          <div key={work + index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  delayChildren: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      className="app__flex"
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      className="app__flex"
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work");
