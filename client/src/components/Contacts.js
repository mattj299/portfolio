import React, { useState } from "react";
import "./Contacts.css";
import resumeIcon from "../images/resumeIcon.png";
import resume from "../resume/resume.pdf";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const INITIAL_STATE = { name: "", email: "", message: "", phone: "" };
function Contacts() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [dataStatus, setDataStatus] = useState("");

  const submitEmail = async (e) => {
    setDataStatus("Sending email...");

    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      const result = await response.json();

      setDataStatus("Email sent successfully!");
    } catch {
      setDataStatus("Email failed to send. Please try again.");
    }

    clearForm();
  };

  const clearForm = () => {
    setFormData(INITIAL_STATE);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <h1 className="section-header">Contacts</h1>

        <form className="contacts-form" onSubmit={submitEmail}>
          <label className="contacts-form-label">Name:</label>
          <input
            required
            className="contacts-form-input"
            name="name"
            placeholder="Enter your name here"
            onChange={onChange}
            value={formData.name}
          />
          <label className="contacts-form-label">Email:</label>
          <input
            required
            type="email"
            className="contacts-form-input"
            name="email"
            placeholder="Enter your email here"
            onChange={onChange}
            value={formData.email}
          />
          <label className="contacts-form-label">
            Phone number (optional):
          </label>
          <input
            className="contacts-form-input"
            name="phone"
            placeholder="Enter your phone number here (optional)"
            onChange={onChange}
            value={formData.phone}
          />
          <label className="contacts-form-label">Message:</label>
          <textarea
            required
            className="contacts-form-textarea"
            name="message"
            placeholder="Enter your message here"
            onChange={onChange}
            value={formData.message}
          />

          <p className="contacts-form-data-status">{dataStatus}</p>

          <button className="contacts-form-submit" type="submit">
            SEND
          </button>
        </form>

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
            Contact me I will respond ASAP!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
