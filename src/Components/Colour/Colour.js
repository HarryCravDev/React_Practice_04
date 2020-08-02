import React from "react";

class Colour extends React.Component {
  state = {};

  render() {
    const { colour } = this.props;
    console.log(colour);
    return (
      <div>
        <h1>{this.props.colour.colour}</h1>
      </div>
    );
  }
}

export default Colour;
