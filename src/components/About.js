import React from "react";
import "./About.css";

import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiGit,
  DiSass,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";

import { SiFirebase } from "react-icons/si";

import { MdPhonelink } from "react-icons/md";

import { IconContext } from "react-icons/lib";

function About() {
  return (
    <IconContext.Provider value={{ className: "about-skills-list-item-icon" }}>
      <div className="about" id="about">
        <div className="container">
          <h1 className="section-header">Skills</h1>

          <div className="about-content">
            <ul className="about-skills-list">
              <li className="about-skills-list-item">
                <DiHtml5 />
                <p className="about-skills-list-item-desc">HTML</p>
              </li>
              <li className="about-skills-list-item">
                <DiCss3 />
                <p className="about-skills-list-item-desc">CSS</p>
              </li>
              <li className="about-skills-list-item">
                <DiJavascript1 />
                <p className="about-skills-list-item-desc">JAVASCRIPT</p>
              </li>
              <li className="about-skills-list-item">
                <DiReact />
                <p className="about-skills-list-item-desc">REACT</p>
              </li>
              <li className="about-skills-list-item">
                <MdPhonelink />
                <p className="about-skills-list-item-desc">RESPONSIVE DESIGN</p>
              </li>
              <li className="about-skills-list-item">
                <DiGit />
                <p className="about-skills-list-item-desc">GIT/GITHUB</p>
              </li>
              <li className="about-skills-list-item">
                <SiFirebase />
                <p className="about-skills-list-item-desc">FIREBASE (NOSQL)</p>
              </li>
            </ul>

            <br></br>

            <h2 className="section-header">Understanding of</h2>
            <ul className="about-skills-list">
              <li className="about-skills-list-item">
                <DiSass />
                <p className="about-skills-list-item-desc">SCSS</p>
              </li>
              <li className="about-skills-list-item">
                <DiNodejs />
                <p className="about-skills-list-item-desc">NODEJS</p>
              </li>
              <li className="about-skills-list-item">
                <DiMongodb />
                <p className="about-skills-list-item-desc">MONGODB</p>
              </li>
            </ul>

            <div className="about-ending-text-container">
              <h3>Ready to learn, expand, and more!</h3>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default About;
