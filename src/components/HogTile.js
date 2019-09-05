import React, {Component} from "react"

class HogTile extends Component{
  constructor(){
    super()
    this.state={
      tileToggle: false
    }
  }
  
  toggleTile = () => {
    this.setState({tileToggle: !this.state.tileToggle})
  }

  showHogDetails = () => {
    if(this.state.tileToggle === true){
      return(
      <div>
        <p>specialty: {this.props.hog.specialty}</p>
        <p>greased: {this.props.hog.greased ? "yes" : "no"}</p>
        <p>weight: {this.props.hog.weight}lbs</p>
        <p>highest medal achieved: {this.props.hog["highest medal achieved"]}</p>
      </div>
      )
    }
  }

  render(){
  return(
  <div>
    <h1> {this.props.hog.name} </h1>
    <img 
    src={require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)}
    alt={this.props.hog.name}
    onClick={this.toggleTile}
    />
    {this.showHogDetails()}
  </div>
  )}}

export default HogTile