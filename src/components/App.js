import React, { Component } from "react";
import "../App.css";
import Nav from "../containers/Nav";
import hogsData from "../porkers_data";
import HogContainer from "../containers/HogContainer";

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
  getHogs = () => {
    hogsData.map(hogs => this.setState({ hogs }));
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <ul>{this.getHogs}</ul>
      </div>
    );
  }
}

export default App;
