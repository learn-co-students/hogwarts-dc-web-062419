import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'
import Sort from './Sort'


let listHogs = hogs.map((hog) => { 
  let lowerCase = hog.name.toLowerCase()
  let splitName = lowerCase.split(' ')
  let fileName = splitName.join("_")
  return {...hog, pic: `${fileName}.jpg`}
})

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: listHogs,
      settings: {
        greased: null,
        selected: ''
      }
    }
  }



  onGreasedHogs = (e) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        greased: e.target.value
      }
      })

    
  }

  onSelectChange = (e) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        selected: e.target.value
      }
    })
  }


  filterGreased = (copy) => {
    debugger
    switch(this.state.settings.greased) {
      case 'greased': 
       return copy.filter(hog => hog.greased === true)
     
      case 'dry':
        return copy.filter(hog => hog.greased !== true)
     
      default:
        return copy
    }
  }

  changeFilter = () => {
    let copy = [...this.state.hogs]
    switch(this.state.settings.selected){
        case 'name':
            copy = this.sortName(copy)
            return copy
        break;
        
        case 'weight':
           copy = this.sortWeight(copy)
           debugger
           return copy
        break;

        case "": 
           return copy
      
        default: 
           return copy
    }

}


sortWeight = (copy) => {
  debugger
 return copy.sort((hog1, hog2) => {return hog1.weight - hog2.weight})
}


  sortName = (copy) => {
    return copy.sort((hog1, hog2) => {
        let name1 = hog1.name.toLowerCase()
        let name2 = hog2.name.toLowerCase()
        if(name1 < name2) {
            return -1
        }
        if (name1 > name2) {
            return 1
        }
          return 0 
      })
  }




  render() {
    console.log(listHogs)
    return (
      <div className="App">
          < Nav />
          <Filter hogs={this.state.hogs} onGreasedHogs={this.onGreasedHogs} onSelectChange={this.onSelectChange}/>
          <HogContainer hogs={this.filterGreased(this.changeFilter())}/>
      </div>
    )
  }
}

export default App;
