import React, { useState } from "react";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import './index.css';

function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
      <div className="main-container">
      <div id="portfolio" className="portfolio">
        <div className="btn">
        <button onClick={() => setActiveSection("skills")} >Skills</button>
        <button onClick={() => setActiveSection("projects")}>Projects</button>
        <button onClick={() => setActiveSection("certificates")} >Certificates</button>
        </div>

      {activeSection === "skills" && <Skills/>}
      {activeSection === "projects" && <Projects />}
      {activeSection === "certificates" && <Certificates />}
    </div>
    </div>
  );
}

export default Portfolio;