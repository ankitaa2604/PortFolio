import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Layout.css";

const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
