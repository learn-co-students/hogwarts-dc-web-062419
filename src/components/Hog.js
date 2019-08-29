import React, { Component } from "react";
import HogDetails from "./HogDetails";

class Hogs extends Component {
  constructor() {
    super();
    this.state = {
      beenClicked: false
    };
  }
  getHogImage = () => {
    let x = this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase();
    let pic = require(`../hog-imgs/${x}.jpg`);
    return pic;
  };
  handleClick = () => {
    this.setState({ beenClicked: true });
  };
  handleSecondClick = () => {
    this.setState({ beenClicked: false });
  };

  render() {
    return this.state.beenClicked === false ? (
      <div
        onClick={this.handleClick.bind(this)}
        className="ui eight wide column"
      >
        <img src={this.getHogImage()} alt="hog image" />
        <h1>{this.props.hog.name}</h1>
      </div>
    ) : (
      <div
        onClick={this.handleSecondClick.bind(this)}
        className="ui eight wide column"
      >
        <img src={this.getHogImage()} alt="hog image" />{" "}
        <h1>{this.props.hog.name}</h1>
        <h2>Specialty: {this.props.hog.specialty}</h2>
        <h3>Greased: {`${this.props.hog.greased}`}</h3>
        <h4>Weight {this.props.hog.weight}</h4>
        <h5>
          Highest medal achieved: {this.props.hog["highest medal achieved"]}
        </h5>
      </div>
    );
  }
}

export default Hogs;
