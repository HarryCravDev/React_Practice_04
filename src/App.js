import React from "react";
import "./App.css";
import ColourContainer from "./Components/Colour_Container/ColourContainer";
import Header from "./Components/Header/Header";
import ToolBar from "./Components/Tool_Bar/ToolBar";

class App extends React.Component {
  state = {
    colors: [],
    selectedColor: 0,
    difficulty: {
      easy: 3,
      hard: 6,
    },
    headerColor: "rgb(153, 170, 181)",
    rgbValue: "",
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

    // Create winning color by number using index.
    const number = Math.floor(Math.random() * 6);
    // Loop array for answer, get value
    const value = colors.filter((item) => item.id === number);
    const rgbValue = value[0].color;

    // Update state
    this.setState({
      colors: colors,
      selectedColor: number,
      rgbValue: rgbValue,
    });
  }

  // Reset Game
  resetGame = () => {
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

    // Create winning color by number using index.
    const number = Math.floor(Math.random() * 6);
    // Loop array for answer, get value
    const value = colors.filter((item) => item.id === number);
    const rgbValue = value[0].color;
    // Random Color
    const rgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    // Update state
    this.setState({
      colors: colors,
      selectedColor: number,
      rgbValue: rgbValue,
      // headerColor: rgbColor,
    });
    console.log("Hello");
  };

  // Update Header with winning color
  colorHeader = (id) => {
    const colorArray = this.state.colors.filter((color) => color.id === id);
    const headerColor = colorArray[0];
    this.setState({ headerColor: headerColor.color });
  };

  // Check if correct answer, remove color if wrong.
  clickColor = (color) => {
    // Check if answer is correct
    if (color === this.state.selectedColor) {
      alert("Winner");
      this.colorHeader(color);
      this.resetGame();
      return;
    }

    // Filter colors
    const updateColors = this.state.colors.filter((item) => item.id !== color);

    // Update State
    this.setState({ colors: updateColors });
  };

  render() {
    return (
      <div className="App">
        <Header color={this.state.headerColor} rgbValue={this.state.rgbValue} />
        {/* <button onClick={this.resetGame}>Click</button> */}
        <ToolBar />
        <ColourContainer
          clickColor={this.clickColor}
          colors={this.state.colors}
        />
      </div>
    );
  }
}

export default App;
