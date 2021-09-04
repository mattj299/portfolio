import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [openedNav, setOpenedNav] = useState(false);

  const toggleNav = () => setOpenedNav(!openedNav);

  const closeNav = () => setOpenedNav(false);

  useEffect(() => {
    window.addEventListener("resize", closeNav);

    return () => {
      window.removeEventListener("resize", closeNav);
    };
  });
  return (
    <>
      <Navbar openedNav={openedNav} toggleNav={toggleNav} closeNav={closeNav} />
      <HeroSection openedNav={openedNav} />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
