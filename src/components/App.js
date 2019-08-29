import React, { Component } from "react";
import "../App.css";
import Nav from "../containers/Nav";
import hogsData from "../porkers_data";
import HogContainer from "../containers/HogContainer";
import Filters from "../components/Filters";
import { hostname } from "os";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogsData,
      settings: {
        filter: "all",
        ascending: true,
        sort: "name"
      }
    };
  }

  onChangeSort = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        sort: event.target.value
      }
    });
  };

  //state changing callback
  onChangeAscend = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        ascending: event.target.checked
      }
    });
  };

  //state changing callback
  onChangeGreased = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        filter: event.target.value
      }
    });
  };

  getSortedListOfHogs = () => {
    let copy = [...this.state.hogs];
    switch (this.state.settings.sort) {
      case "weight":
        copy.sort((a, b) => a.weight - b.weight);
        break;
      case "name":
        copy.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      default:
    }
    if (!this.state.settings.ascending) {
      copy.reverse();
    }
    return copy;
  };

  filterBy = hogArray => {
    switch (this.state.settings.filter) {
      case "greased":
        return hogArray.filter(hog => hog.greased);
        break;
      case "non-greased":
        return hogArray.filter(hog => !hog.greased);
        break;
      default:
        return hogArray;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters
          settings={this.state.settings}
          onChangeSort={this.onChangeSort}
          onChangeAscend={this.onChangeAscend}
          onChangeGreased={this.onChangeGreased}
        />
        <HogContainer hogs={this.filterBy(this.getSortedListOfHogs())} />
      </div>
    );
  }
}

export default App;
