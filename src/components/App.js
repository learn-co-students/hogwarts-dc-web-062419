import React, { Component } from "react";
import "../App.css";
import Nav from "../containers/Nav";
import hogsData from "../porkers_data";
import HogContainer from "../containers/HogContainer";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: [],
      filters: {
        greased: hogsData.greased
      }
    };
  }
  componentDidMount() {
    this.setState({ hogs: hogsData });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
