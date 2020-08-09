import React from "react";
import "./ToolBar.styles.css";

class ToolBar extends React.Component {
  render() {
    return (
      <div className="toolbar-container">
        <button
          className="ui button primary"
          onClick={() => this.props.resetGame()}>
          Play Again?
        </button>
        <button
          onClick={() => this.props.setDifficulty(3)}
          className="ui button positive">
          Easy
        </button>
        <button
          onClick={() => this.props.setDifficulty(6)}
          className="ui button negative">
          Hard
        </button>
      </div>
    );
  }
}

export default ToolBar;
