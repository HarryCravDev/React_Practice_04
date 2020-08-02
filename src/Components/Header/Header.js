import React from "react";
import "./Header.styles.css";

const Header = ({ color }) => {
  return (
    <div className="header-container" style={{ backgroundColor: color }}>
      <h1 className="ui header">RGB Colour Guessing Game</h1>
      <h1 className="ui header">RGB(0, 0, 0)</h1>
    </div>
  );
};

export default Header;
