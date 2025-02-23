import React, { useState, useRef, useEffect } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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



      <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:jadhavankita757@gmail.com">jadhavankita757@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ankitajadhav2604/" target="_blank">ankitajadhav2604</a></p>
      <p>GitHub: <a href="https://github.com/ankitaa2604" target="_blank">ankitaa2604</a></p>
    </div>
    </div>
  );
};

export default Contact;
