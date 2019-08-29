import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";
import Filter from "./Filter";
import Sort from "./Sort";

class App extends Component {
  state = {
    hogs: hogs,
    filteredHogs: hogs
  };

  filterHogs = event => {
    if(event.target.value === 'all'){
      this.setState({
        filteredHogs: this.state.hogs
    })}
    else {
    let val = event.target.value === "true" ? true : false
   
    let ho = this.state.hogs.filter(hog => hog.greased === val);
    this.setState({
      filteredHogs: ho
    })}
  };

  sortHogs = (event) => {
    if(event.target.value === 'all'){
    //   this.setState({
    //     filteredHogs: this.state.hogs
    // })
  }
    else if (event.target.value === 'name'){
      this.setState({
        filterHogs: this.state.filteredHogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    })}
    else{

      this.setState({
        filterHogs: this.state.filteredHogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    })
    }
    
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <p><Filter filterHogs={this.filterHogs} /> 
        <Sort sortHogs={this.sortHogs}/></p>
        <HogContainer hogs={this.state.filteredHogs} />
      </div>
    );
  }
}

export default App;
