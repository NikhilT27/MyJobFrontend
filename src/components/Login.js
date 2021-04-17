import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="login-box">
      <div className="main-dark"></div>
      <div className="modal">
        <LoginForm />
      </div>
      <div className="main-light"></div>
    </div>
  );
}
