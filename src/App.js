import React from "react";
import "./App.css";
import ColourContainer from "./Components/Colour_Container/ColourContainer";
import Header from "./Components/Header/Header";

class App extends React.Component {
  state = {
    colors: [],
    selectedColor: Math.floor(Math.random() * 6),
    difficulty: {
      easy: 3,
      hard: 6,
    },
    headerColor: "RGB(0, 0, 0)",
  };

  componentDidMount() {
    // Get Colors
    let colors = [];
    for (let i = 0; i < this.state.difficulty.hard; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      colors.push({
        id: i,
        color: `rgb(${r}, ${g}, ${b})`,
      });
    }
    console.log("Mount");
    // Update state
    this.setState({ colors: colors });
  }

  // Update Header with winning color
  colorHeader = (id) => {
    const colorArray = this.state.colors.filter((color) => color.id === id);
    const headerColor = colorArray[0];
    this.setState({ headerColor: headerColor.color });
  };

  // User Click color
  clickColor = (color) => {
    console.log(color);
    // Check if answer is correct
    if (color === this.state.selectedColor) {
      alert("Winner");
      this.colorHeader(color);
    }

    // Filter colors
    const updateColors = this.state.colors.filter((item) => item.id !== color);

    // Update State
    this.setState({ colors: updateColors });
  };

  render() {
    return (
      <div className="App">
        <Header color={this.state.headerColor} />
        <ColourContainer
          clickColor={this.clickColor}
          colors={this.state.colors}
        />
      </div>
    );
  }
}

export default App;
