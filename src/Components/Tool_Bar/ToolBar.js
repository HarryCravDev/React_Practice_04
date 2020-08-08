import React from "react";
import "./ToolBar.styles.css";

class ToolBar extends React.Component {
  render() {
    return (
      <div className="toolbar-container">
        <button>Play Again?</button>
        <button>How to play.</button>
      </div>
    );
  }
}

export default ToolBar;
