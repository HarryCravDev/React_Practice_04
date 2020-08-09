import React from "react";
import "./ToolBar.styles.css";

class ToolBar extends React.Component {
  render() {
    return (
      <div className="toolbar-container">
        <button onClick={() => this.props.resetGame()}>Play Again?</button>
        <button onClick={() => this.props.setDifficulty(3)}>Easy</button>
        <button onClick={() => this.props.setDifficulty(6)}>Hard</button>
      </div>
    );
  }
}

export default ToolBar;
