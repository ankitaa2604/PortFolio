import React from "react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building a Portfolio with React & TypeScript",
      date: "February 23, 2025",
      excerpt: "A guide on how to create a modern portfolio using React and TypeScript.",
    },
    {
      title: "Improving Performance in React Apps",
      date: "February 10, 2025",
      excerpt: "Optimizing React apps with lazy loading, memoization, and efficient rendering techniques.",
    },
    {
      title: "Dark Mode Implementation in React",
      date: "January 25, 2025",
      excerpt: "How to implement a seamless dark mode toggle in a React application.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
            <button className="mt-4 text-blue-400 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
