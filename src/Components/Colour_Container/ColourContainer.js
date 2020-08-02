import React from "react";
import "./ColourContainer.styles.css";
import Colour from "../Colour/Colour";

const ColourContainer = ({ colors, clickColor }) => {
  const colorComponents = colors.map(({ color, id }) => (
    <Colour key={id} id={id} clickColor={clickColor} color={color} />
  ));

  return (
    <div className="ui container">
      <div className="color-container">{colorComponents}</div>
    </div>
  );
};

export default ColourContainer;
