import React, { Component } from "react";
import hogpick from "../hog-imgs/the_prosciutto_concern.jpg";

class HogTile extends Component {
  state = {
    displayDetails: false
  };

  showDetails = () => {

    let status = !this.state.displayDetails;
    this.setState(
      {
        displayDetails: status
      },
      this.displayHogDetails
    );
  };



  render() {
    const { name, specialty, greased, weight } = this.props.hog;
    let color = "gray";
    // style={{ background: color }}
    return (
      <div className="ui eight wide column" onClick={this.showDetails}>
        <p>Name: {name}</p>
        <img src={hogpick} alt=""></img>
        {this.state.displayDetails ? (
          <div>
            <p>Greased?: { greased ? "Greased" : "Not Greased"  }</p>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
          </div>
        ) : null}
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default HogTile;
