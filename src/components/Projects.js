import React, { useState, useEffect } from "react";
import "./Projects.css";

import javierWashScreenshot from "../images/javierWashScreenshot.png";
import recipeBookScreenshot from "../images/recipeBookScreenshot.png";
import quizOpenTDB from "../images/quizOpenTDB.png";
import tipCalculator from "../images/tipCalculator.png";
import tipCalculator2 from "../images/tipCalculator2.png";
import toDoList from "../images/toDoList.png";
import toDoList2 from "../images/toDoList2.png";
import prestoPastaRemake from "../images/prestoPastaRemake.png";
import prestoPastaRemake2 from "../images/prestoPastaRemake2.png";
import prestoPastaRemake3 from "../images/prestoPastaRemake3.png";
import personalPortfolio from "../images/personalPortfolio.png";
import navbarProject from "../images/navbarProject.png";
import navbarProject2 from "../images/navbarProject2.png";
import weatherHere from "../images/weatherHere.png";
import weatherHere2 from "../images/weatherHere2.png";
import weatherHere3 from "../images/weatherHere3.png";
import quizHardData from "../images/quizHardData.png";
import quizHardData2 from "../images/quizHardData2.png";
import quizHardData3 from "../images/quizHardData3.png";

import {
  AiFillEye,
  AiFillGithub,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="section-header">Personal Projects</h1>
        <div className="projects-content">
          <Project
            projectImg={javierWashScreenshot}
            viewCode="https://github.com/mattj299/javierWash/tree/master"
            liveLink="https://mattj299.github.io/javierWash/"
            projectDesc="Made for Local Car Wash business."
            liveOrGallery={true}
          />
          <Project
            projectImg={recipeBookScreenshot}
            viewCode="https://github.com/mattj299/recipe-book"
            liveLink="https://mattj299.github.io/recipe-book/"
            projectDesc="Recipe Book to create, find, and save new or old recipes."
            liveOrGallery={true}
          />
          <Project
            projectImg={quizOpenTDB}
            viewCode="https://github.com/mattj299/react-quiz-opentdb-api"
            liveLink="https://mattj299.github.io/react-quiz-opentdb-api/"
            projectDesc="Quiz where you decide the # of questions, difficulty, and category."
            liveOrGallery={true}
          />
          <Project
            projectImg={personalPortfolio}
            viewCode="https://github.com/mattj299/react-quiz-opentdb-api"
            liveLink="https://mattj299.github.io/react-quiz-opentdb-api/"
            projectDesc="Personal Portfolio built from scratch."
            liveOrGallery={true}
          />
          <Project
            projectImg={weatherHere}
            viewCode="https://github.com/mattj299/weather-here"
            projectDesc="Weather app displaying weather in current location or wherever inputted."
            liveOrGallery={false}
            header="Weather App"
            galleryItems={[
              `url(${weatherHere})`,
              `url(${weatherHere2})`,
              `url(${weatherHere3})`,
            ]}
          />
          <Project
            projectImg={prestoPastaRemake}
            viewCode="https://github.com/mattj299/react-quiz-opentdb-api"
            projectDesc="Complete remake of Presto Pasta home page only by looking at page."
            liveOrGallery={false}
            header="Presto Pasta Remake"
            galleryItems={[
              `url(${prestoPastaRemake})`,
              `url(${prestoPastaRemake2})`,
              `url(${prestoPastaRemake3})`,
            ]}
          />
          <Project
            projectImg={tipCalculator}
            viewCode="https://github.com/mattj299/recipe-book"
            projectDesc="Calculates amount to tip waiter based on # of people, service quality, and bill amount."
            liveOrGallery={false}
            header="Tip Calculator"
            galleryItems={[`url(${tipCalculator})`, `url(${tipCalculator2})`]}
          />
          <Project
            projectImg={toDoList}
            viewCode="https://github.com/mattj299/recipe-book"
            projectDesc="To Do List. Can check off, create, or delete to do's."
            liveOrGallery={false}
            header="To Do List"
            galleryItems={[`url(${toDoList})`, `url(${toDoList2})`]}
          />
          <Project
            projectImg={navbarProject}
            viewCode="https://github.com/mattj299/react-quiz-opentdb-api"
            projectDesc="Dynamic Navbar taking up entire screen."
            liveOrGallery={false}
            header="Navbar Project"
            galleryItems={[`url(${navbarProject})`, `url(${navbarProject2})`]}
          />
          <Project
            projectImg={quizHardData}
            viewCode="https://github.com/mattj299/react-quiz-app-hooks"
            projectDesc="First version of quiz. This version uses hard data rather than an api. Data can be altered if wished."
            liveOrGallery={false}
            header="Quiz First Version"
            galleryItems={[
              `url(${quizHardData})`,
              `url(${quizHardData2}`,
              `url(${quizHardData3})`,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

// liveOrGallery is boolean, true is live, false is gallery
// header is only needed if liveOrGallery is false
// galleryItems is an array of objects, objects only have path to image
function Project({
  projectImg,
  viewCode,
  liveLink,
  projectDesc,
  liveOrGallery,
  header,
  galleryItems,
}) {
  // If showGallery is true check if user clicked inside or outside of overlay gallery content. If clicked on outside set gallery to false, else do nothing
  const outsideContentClick = (e) => {
    if (!showGallery) return;
    else {
      const overlayGalleryContent = e.target.closest(
        ".overlay-gallery-content"
      );
      if (!overlayGalleryContent) {
        closeGallery();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideContentClick);
    return () => {
      document.removeEventListener("click", outsideContentClick);
    };
  });

  const [showGallery, setShowGallery] = useState(false);

  const toggleSetShowGallery = () => setShowGallery(!showGallery);
  const closeGallery = () => setShowGallery(false);

  const [slide, setSlide] = useState(0);

  const previousSlide = (e) => {
    // Sometimes returns undefined for some reason so when it does just do nothing
    if (!e.target.parentNode.offsetParent) {
      return;
    }
    const overlayArray = e.target.parentNode.offsetParent.querySelectorAll(
      ".overlay-img"
    );
    const currentSlide = overlayArray[slide];
    const previousSlide = overlayArray[slide - 1];
    currentSlide.classList.add("hide");

    // If on first slide, show last slide, else show previous
    if (slide === 0) {
      overlayArray[overlayArray.length - 1].classList.remove("hide");
      setSlide(overlayArray.length - 1);
    } else {
      previousSlide.classList.remove("hide");
      setSlide(slide - 1);
    }
  };

  const nextSlide = (e) => {
    // Sometimes returns undefined for some reason so when it does just do nothing
    if (!e.target.parentNode.offsetParent) {
      return;
    }
    const overlayArray = e.target.parentNode.offsetParent.querySelectorAll(
      ".overlay-img"
    );
    const currentSlide = overlayArray[slide];
    const nextSlide = overlayArray[slide + 1];
    currentSlide.classList.add("hide");

    // If on last slide, show first slide, else show next
    if (slide === overlayArray.length - 1) {
      overlayArray[0].classList.remove("hide");
      setSlide(0);
    } else {
      nextSlide.classList.remove("hide");
      setSlide(slide + 1);
    }
  };

  return (
    <div className="project">
      <div
        className="project-img"
        style={{ backgroundImage: `url(${projectImg})` }}
      >
        {liveOrGallery && (
          <div className="project-img-overlay">
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="overlay-live-btn"
            >
              Live
            </a>
          </div>
        )}
        {!liveOrGallery && (
          <>
            <div className="project-img-overlay">
              <div className="overlay-live-btn" onClick={toggleSetShowGallery}>
                Gallery
              </div>
            </div>
            <div
              className={
                showGallery ? "overlay-gallery active" : "overlay-gallery"
              }
            >
              <div className="overlay-gallery-content">
                <div
                  className="overlay-gallery-close"
                  onClick={toggleSetShowGallery}
                >
                  <AiOutlineClose className="overlay-icons" />
                </div>
                <h1 className="overlay-gallery-header">{header}</h1>

                {galleryItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundImage: item }}
                      className={!index ? "overlay-img" : "overlay-img hide"}
                      alt={header}
                    ></div>
                  );
                })}
                <div className="overlay-arrow-left" onClick={previousSlide}>
                  <AiOutlineArrowLeft className="overlay-icons" />
                </div>
                <div className="overlay-arrow-right" onClick={nextSlide}>
                  <AiOutlineArrowRight className="overlay-icons" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="project-extras">
        <p className="project-description">{projectDesc}</p>
        <div className="project-icons">
          <a href={viewCode} target="_blank" rel="noreferrer">
            <AiFillGithub className="project-icon" />
          </a>
          {liveOrGallery && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <AiFillEye className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
