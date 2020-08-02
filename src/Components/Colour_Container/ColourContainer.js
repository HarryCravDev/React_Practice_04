import React from "react";
import Colour from "../Colour/Colour";

const ColourContainer = ({ colours }) => {
  const colourComponents = colours.map(({ colour, id }) => (
    <Colour key={id} colour={colour} />
  ));

  return <div>{colourComponents}</div>;
};

export default ColourContainer;
