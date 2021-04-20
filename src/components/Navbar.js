import React from "react";
import "./Navbar.css";

import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ openedNav, toggleNav, closeNav }) {
  return (
    <IconContext.Provider value={{ className: "navbar-icons" }}>
      <div className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <div className="logo">MJ</div>
            </div>
            <div className="navbar-right">
              <div className="navbar-menu-icon" onClick={toggleNav}>
                <AiOutlineMenu />
              </div>

              <ul className={openedNav ? "navbar-menu active" : "navbar-menu"}>
                <div className="navbar-menu-icon" onClick={toggleNav}>
                  <AiOutlineClose />
                </div>
                <a
                  href="#projects"
                  onClick={closeNav}
                  className="navbar-menu-item"
                >
                  <li className="">Projects</li>
                </a>
                <a
                  href="#about"
                  onClick={closeNav}
                  className="navbar-menu-item"
                >
                  <li>About</li>
                </a>
                <a
                  href="#contacts"
                  onClick={closeNav}
                  className="navbar-menu-item"
                >
                  <li>Contacts</li>
                </a>
                {/* <a
                  href="https://github.com/mattj299"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-menu-item"
                >
                  <li onClick={closeNav}>
                    <AiFillGithub />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-jimenez-56938220a/"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-menu-item"
                >
                  <li onClick={closeNav}>
                    <AiFillLinkedin />
                  </li>
                </a>
                <a
                  href="mailto:mateonas586@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar-menu-item"
                >
                  <li onClick={closeNav}>
                    <AiOutlineMail />
                  </li>
                </a> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
