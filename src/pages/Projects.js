import React from "react";

const Projects = () => {
  const projectList = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
