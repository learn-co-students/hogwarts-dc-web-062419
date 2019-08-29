import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleFilter}>Greased Hogs Only</button>
      </div>
    );
  }
}

// This button needs to trigger a method that changes the state in APP and will pass that method the value of the selected drop-down
// in turn there will be a method that changes the state of the hogs to include on the ones based on filtered status
