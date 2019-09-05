import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from "../containers/HogContainer"
import Filter from "./Filter"
import Sort from "./Sort"

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: [],
      showGreased: false,
      sort: ""
    }
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  toggleGreased = () => {
    this.setState({showGreased: !this.state.showGreased})
  }

  renderHogs = () => {
    const filteredHogs = this.state.hogs.filter(hog => hog.greased)
    return !this.state.showGreased ? [...this.state.hogs] : filteredHogs
  }

  sortHogs = (event) => {
    this.setState({
      sort: event.target.name
    })
  }

  sortRenederedHogs = () => {
    if(this.state.sort === ""){
      return this.renderHogs()
    }
    else{
      return(
        this.renderHogs().sort((hogA, hogB) => {
          if(hogA[this.state.sort] < hogB[this.state.sort]){
            return -1
          }
          if(hogA[this.state.sort] > hogB[this.state.sort]){
            return 1
          }
          else{
            return 0
          }
        })
      )
    }
  }


  // sortRenederedHogs = () => {
  //   if(this.state.sort === "name"){
  //     return(
  //       this.renderHogs().sort(function(hogA,hogB){
  //       if(hogA.name < hogB.name){
  //         return -1;
  //       }
  //       if(hogA.name > hogB.name){
  //         return 1;
  //       }
  //       return 0
  //     }))
  //   }
  //   else if(this.state.sort === "weight"){
  //     return(
  //       this.renderHogs().sort(function(hogA,hogB){
  //       if(hogA.weight < hogB.weight){
  //         return -1;
  //       }
  //       if(hogA.weight > hogB.weight){
  //         return 1;
  //       }
  //       return 0
  //     }))
  //   }
  //     else{
  //       return this.renderHogs()
  //   }
  // }

  render() {
    return (
      <div clweight="App">
          < Nav />
          < Filter showGreased={this.state.showGreased} toggleGreased={this.toggleGreased}/>
          < Sort sortHogs={this.sortHogs} sort={this.state.sort}/>
          < HogContainer hogs={this.sortRenederedHogs()}/>
      </div>
    )
  }
}

export default App;
