import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const toggleTheme = themeContext ? themeContext.toggleTheme : () => {};

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
