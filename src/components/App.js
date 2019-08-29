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
    filteredHogs: hogs,
    sort: "all"

  };

  filterHogs = event => {
    
    if(event.target.value === 'all'){

      this.setState({
        filteredHogs: this.state.hogs
    })}
    else {

      let val = event.target.value === "true" ? true : false
     
      let ho = this.state.hogs.filter(hog => hog.greased === val);
      if (this.state.sort === 'name'){
         let hos = ho.sort((a, b) => (a.name > b.name) ? 1 : -1)
        
        this.setState({
            filteredHogs: hos
        })
      }
      else if (this.state.sort === 'weight'){
        let hos = ho.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
       
       this.setState({
           filteredHogs: hos
       })
     }
     else if (this.state.sort === 'all'){
     
     this.setState({
         filteredHogs: ho
     })
   }
    }


    
    // this.setState({
    //   filteredHogs: ho
    // })}}
  };

  sortHogs = (event) => {
    if(event.target.value === 'all'){
      this.setState({
        sort: event.target.value
    })
  }
    else if (event.target.value === 'name'){
      this.setState({
        filteredHogs: this.state.filteredHogs.sort((a, b) => (a.name > b.name) ? 1 : -1),
        sort: event.target.value
    })}
    else if (event.target.value === 'weight') {

      this.setState({
        filteredHogs: this.state.filteredHogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1),
        sort: event.target.value
    })
    }

    
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <p><Filter filterHogs={this.filterHogs} /> 
        <Sort sortHogs={this.sortHogs}/></p>
        <HogContainer sort={this.state.sort} hogs={this.state.filteredHogs} />
      </div>
    );
  }
}

export default App;



// if(this.state.sort === 'all'){
//   this.setState({
//     filteredHogs: ho
// })
// }
// else if (this.state.sort === 'name'){
//   this.setState({
//     filteredHogs: ho.sort((a, b) => (a.name > b.name) ? 1 : -1)
// })}
// else if (event.target.value === 'weight') {

//   this.setState({
//     filteredHogs: ho.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
// })