import React from "react";
import "./HeroSection.css";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import resumeIcon from "../images/resumeIcon.png";

function HeroSection({ openedNav }) {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-content">
          <div className="hero-header-top">
            <h1 className="hero-header-top-h1">I'm Matthew Jimenez,</h1>
            <p>A Front End Web Developer</p>
          </div>
          <div
            className={
              openedNav ? "hero-header-bottom opened-nav" : "hero-header-bottom"
            }
          >
            <a href="#contacts" className="hero-header-bottom-cta">
              Contact Me
            </a>
            <ul className="hero-header-bottom-icons">
              <a
                href="https://github.com/mattj299"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hero-header-bottom-icon">
                  <AiFillGithub />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-jimenez-56938220a/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hero-header-bottom-icon">
                  <AiFillLinkedin />
                </li>
              </a>
              <a
                href="mailto:mateonas586@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="hero-header-bottom-icon">
                  <AiOutlineMail />
                </li>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <li className="hero-header-bottom-icon hero-resume-icon-li">
                  <img
                    className="hero-header-resume-icon"
                    src={resumeIcon}
                    alt="resume"
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
