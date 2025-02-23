import React from "react";
import "./About.css";

interface AboutProps {
  name: string;
}

const About: React.FC<AboutProps> = ({ name }) => {
  return (
    <div className="about">
      <h2>About {name}</h2>
      <p>
        I'm a passionate software developer with expertise in C, C++, Python, JavaScript, and more.
        I love working on web applications, solving problems, and continuously learning new technologies.
      </p>
      <h3>Education</h3>
      <ul>
        <li>B.Tech in IT - Government College of Engineering, Karad (8.9/10)</li>
        <li>HSC - Ligade-Patil Junior College (80.3%)</li>
        <li>SSC - Mane Deshmukh Vidyalaya Patan (96.8%)</li>
      </ul>
    </div>
  );
};

export default About;
