 import React, { useState } from "react";
import "./Contact.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
   };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>conatct section</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Age</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">send Message</button>
    </form>
  );
}

export default RegisterForm;
