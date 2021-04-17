import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <h2 className="white">
          My<span className="light-blue">Jobs</span>
        </h2>
        <Link to="/login">
          <Button classes="button header-button">Login/Signup</Button>
        </Link>
      </header>
    </>
  );
}
