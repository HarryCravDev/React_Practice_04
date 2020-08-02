import React from "react";
import "./Colour.styles.css";

const Colour = ({ color, id, clickColor }) => {
  return (
    <div
      className="color"
      onClick={() => clickColor(id)}
      style={{ backgroundColor: `${color}` }}></div>
  );
};

export default Colour;
