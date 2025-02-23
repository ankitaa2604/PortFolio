import React from "react";
import "./Blog.css";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building a Portfolio with React & TypeScript",
      date: "Feb 2025",
      excerpt: "A guide on how to create a modern portfolio using React and TypeScript.",
    },
    {
      title: "Optimizing React Performance",
      date: "Jan 2025",
      excerpt: "Learn techniques like lazy loading and memoization to boost app performance.",
    },
  ];

  return (
    <div className="blog">
      <h2>Blog</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
