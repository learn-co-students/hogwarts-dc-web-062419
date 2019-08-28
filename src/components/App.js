import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";
import Filter from "./Filter";

class App extends Component {
  state = {
    hogs: hogs
  };

  filterHogs = event => {
    let val = event.target.value === "true" ? true : false
   
    let ho = this.state.hogs.filter(hog => hog.greased === val);
    this.setState({
      hogs: ho
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs={this.filterHogs} />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
