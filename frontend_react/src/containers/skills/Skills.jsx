import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text app__skills-head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              className="app__skills-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((exp, index) => (
            <div key={index} className="app__skills-exp-item">
              <div className="app__skills-exp-period">
                <p className="bold-text">{exp.period}</p>
              </div>
              <motion.div
                className="app__skills-exp-work"
                data-tip
                data-for={exp.name + index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="bold-text">{exp.name}</h4>
                <p className="p-text">{exp.company}</p>
              </motion.div>
              <ReactTooltip
                id={exp.name + index}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {exp.desc}
              </ReactTooltip>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
