import React from "react";
import "./Contacts.css";
import resumeIcon from "../images/resumeIcon.png";
import resume from "../resume/resume.pdf";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <h1 className="section-header">Contacts</h1>

        <div className="contacts-content">
          <ul className="contacts-list">
            <a
              href="https://github.com/mattj299"
              target="_blank"
              rel="noreferrer"
            >
              <li className="contacts-list-icon">
                <AiFillGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-jimenez-56938220a/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="contacts-list-icon">
                <AiFillLinkedin />
              </li>
            </a>
            <a
              href="mailto:mateonas586@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <li className="contacts-list-icon">
                <AiOutlineMail />
              </li>
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              <li className="contacts-list-icon contacts-list-resume">
                <img
                  className="contacts-resume-icon"
                  src={resumeIcon}
                  alt="resume"
                />
              </li>
            </a>
          </ul>

          <h3 className="contacts-content-desc">
            Contact me whenever possible!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
