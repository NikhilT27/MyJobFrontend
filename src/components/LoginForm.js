import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [incorrect, setIncorrect] = useState(false);
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.type]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("/auth/login", formData);

      if (response) {
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (err) {
      setIncorrect(true);
    }
  }

  return (
    <div>
      <h2 className="form-title">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-each">
          <label className="form-each-title">Email address</label>
          <input
            onChange={handleChange}
            type="email"
            required={true}
            placeholder="Enter your email"
            className="form-each-input"
          ></input>
        </div>
        <div className="form-each">
          <div className="form-each-row">
            <label className="form-each-title">Password</label>
            <Link to="/forgotpassword">
              <span className="form-each-title light-blue">
                Forgot your password?
              </span>
            </Link>
          </div>
          <input
            onChange={handleChange}
            type="password"
            required={true}
            className="form-each-input"
            placeholder="Enter your password"
          ></input>
          <div className="form-error">
            <span className="form-each-title form-error-title">
              Incorrect email address or password
            </span>
          </div>
        </div>
        <button className="form-button" type="submit">
          Login
        </button>
        <div>
          <p>
            New to MyJobs?{" "}
            <Link to="/signup">
              <span className="light-blue">Create an account </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
