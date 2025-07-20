import React from "react";
import './img.css';
const projectsData = [
  {
    title: "Weather-App",
    image: "weather.png", // Place this image inside public/images
    link: "https://weatherapp-climatic.vercel.app",
  },
  {
    title: "Tic-Tac-Toe",
    image: "tic.png",
    link: "https://tic-tac-toe-game.com",
  },
];

function Projects() {
  return (
    <div className="project-container"> 
      <div className="project">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
               className="projects-image"
              />
            <h3>{project.title}</h3>
             <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="live-button"
            >
              View Live
            </a>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Projects;