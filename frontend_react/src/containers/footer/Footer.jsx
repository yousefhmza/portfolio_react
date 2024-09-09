import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { AiTwotoneMail } from "react-icons/ai";
import { BsWhatsapp, BsFillPhoneFill, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text app__footer-head-text">Contact Me</h2>
      <div className="app__contact-cards">
        <a className="app__contact-email" href="mailto:yousef.hamza.swe@gmail.com" target="_blank" rel="noreferrer">
          <AiTwotoneMail />
          <p className="p-text">yousef.hamza.swe@gmail.com</p>
        </a>
        <a className="app__contact-whatsapp" href="https://wa.me/+201095470920" target="_blank" rel="noreferrer">
          <BsWhatsapp />
          <p className="p-text">+20109 547 0920</p>
        </a>
        <a className="app__contact-phone" href="tel://+201095470920" target="_blank" rel="noreferrer">
          <BsFillPhoneFill />
          <p className="p-text">+20109 547 0920</p>
        </a>
        <a
          className="app__contact-linkedin"
          href="https://www.linkedin.com/in/yousef-hamza-b03596225"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
          <p className="p-text">Linkedin</p>
        </a>
        <a className="app__contact-github" href="https://github.com/yousefhmza" target="_blank" rel="noreferrer">
          <BsGithub />
          <p className="p-text">Github</p>
        </a>
        <a
          className="app__contact-facebook"
          href="https://www.facebook.com/yousef.hamza.733/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
          <p className="p-text">Facebook</p>
        </a>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__contact"), "contact");
