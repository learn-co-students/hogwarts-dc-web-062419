import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filters from './Filters'
import HogPen from './HogPen'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      settings: {
        sort: 'name',
        filter: 'all' 
      }
    }
  }

  onChangeSort = (event)=>{
    this.setState({
      settings: {
        ...this.state.settings,
        sort: event.target.value
      }
    })
  }

  onChangeGreased = (event)=>{
    console.log(event.target.value)
    this.setState({
      settings: {
        ...this.state.settings,
        filter: event.target.value
      }
    })
  }

  getSortedHogList = () => {
    let copy = [...this.state.hogs]

    switch(this.state.settings.sort){
      case 'weight':
        copy.sort((a,b) => a.weight - b.weight)
      break;
      case 'name':
        copy.sort((a,b) => a.name > b.name ? 1 : -1)
      break;
      default:
    }
    return copy 
  }

  filterBy = (hogArray) => {
    if (this.state.settings.filter === 'greased'){
        return hogArray.filter(hog=>hog.greased)
    } else {
      return hogArray
    }
  }



  render(){
    return (
      <div className='app'>
        < Nav />
        <Filters 
          onChangeSort={this.onChangeSort}
          onChangeGreased={this.onChangeGreased}
        />
        <HogPen 
          hogsToDisplay={this.filterBy(this.getSortedHogList())}
        />
      </div>
    )
  }

}