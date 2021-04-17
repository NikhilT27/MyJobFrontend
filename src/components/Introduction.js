import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="main-content">
      <div className="intro-greeting">
        <h1 className="white intro-title">
          Welcome to
          <br />
          <span className="bold">
            My<span className="light-blue">Jobs</span>
          </span>
        </h1>
        <Link to="/signup">
          <Button classes="button light-button">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
