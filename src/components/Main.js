import React from "react";
import Header from "./Header";
export default function Main(props) {
  return (
    <div className="main">
      <Header />
      {props.children}
    </div>
  );
}
