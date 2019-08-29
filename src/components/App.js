import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all", // This state value will change when the drop-down menu changes
      hogs: [hogs] //This will eventually hold ONLY the hogs based on waht filter is selected. This will hold filtered hogs
    };
  }

  handleFilter = event => {
    let greasedHogs = this.state.hogs[0].filter(hog => {
      return hog.greased === true;
    });
    this.setState({
      hogs: [greasedHogs]
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleFilter={this.handleFilter} />
        <HogContainer hogs={this.state.hogs[0]} />
      </div>
    );
  }
}

export default App;
