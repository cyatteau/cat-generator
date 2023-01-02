import React from "react";
import Animals from "./animals.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Animals} className="header-img" alt="animals"/>
      <h2 className="header-title">Random Cat Image Generator</h2>
    </header>
  );
}
