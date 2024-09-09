import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";

import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../../firebase";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsCollection = collection(firestore, "Skills");
    const getSkills = async () => {
      const snapshot = await getDocs(query(skillsCollection, orderBy("order", "asc")));
      const data = snapshot.docs.map((document) => document.data());
      setSkills(data);
    };

    const experienceCollection = collection(firestore, "Experience");
    const getExperience = async () => {
      const snapshot = await getDocs(query(experienceCollection, orderBy("order", "asc")));
      const data = snapshot.docs.map((document) => document.data());
      setExperience(data);
    };

    getSkills();
    getExperience();
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
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((exp, index) => (
            <div key={index} className="app__skills-exp-item">
              <div className="app__skills-exp-period">
                <p className="bold-text">{`${exp.from} - ${exp.to}`}</p>
              </div>
              <motion.div
                className="app__skills-exp-work"
                data-tip
                data-for={exp.role + index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="bold-text">{exp.role}</h4>
                <p className="p-text">{exp.company}</p>
              </motion.div>
              {/* <ReactTooltip id={exp.role + index} effect="solid" arrowColor="#fff" className="skills-tooltip">
                {exp.desc}
              </ReactTooltip> */}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
