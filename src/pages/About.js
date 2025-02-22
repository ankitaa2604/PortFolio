import React from "react";
import PropTypes from "prop-types";

const About = ({ name }) => {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hello, my name is {name}. I am a React Developer.</p>
    </div>
  );
};

About.propTypes = {
  name: PropTypes.string.isRequired,
};

export default About;
