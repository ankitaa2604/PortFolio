import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="hero">
      <h1>Hi, I'm Ankita Jadhav</h1>
      <p>Software Developer | Passionate about Web & AI</p>
      <p>Skilled in C, C++, Python, JavaScript, React, and more.</p>
      <a href="/projects" className="cta-button">View My Work</a>
    </div>
  );
};

export default Home;
