import React from "react";
import "./App.css";
import ColorContainer from "./Components/Colour_Container/ColourContainer";

class App extends React.Component {
  state = {
    colors: [],
    selectedColour: Math.floor(Math.random() * 6) + 1,
    difficulty: {
      easy: 3,
      hard: 6,
    },
  };

  componentDidMount() {
    // Get Colors
    let colors = [];
    for (let i = 0; i < this.state.number; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colors.push({
        id: i,
        colour: `rgb(${r}, ${g}, ${b})`,
      });
    }
    // Update state
    this.setState({ colors: colors });
  }

  getColour = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

    // colors.push({ colour: "rgb(" + r + ", " + g + ", " + b + ")" });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <ColorContainer colours={this.state.colors} />
      </div>
    );
  }
}

export default App;
