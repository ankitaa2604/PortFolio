import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Driver Drowsiness Detection",
    description:
      "Developed a system using CNN, OpenCV, and Keras that alerts drivers when drowsiness is detected.",
  },
  {
    title: "Attrent - Rental Website",
    description:
      "Built a platform for renting clothes & accessories with a booking system for photographers, parlors, and halls.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
