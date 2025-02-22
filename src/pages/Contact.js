import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you at ${formData.email}`);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
