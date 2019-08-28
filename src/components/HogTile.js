import React, { Component } from "react";
import hogpick from "../hog-imgs/the_prosciutto_concern.jpg";

class HogTile extends Component {
  state = {
    displayDetails: false
  };

  showDetails = () => {
    console.log("clicked");

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
    return (
      <div style={{ background: color }} onClick={this.showDetails}>
        <p>Name: {name}</p>
        <img src={hogpick}></img>
        {this.state.displayDetails ? (
          <div>
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
