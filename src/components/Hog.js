import React, { Component } from "react";

class Hog extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    return this.state.showDetails === false ? (
      <div className="ui eight wide column card" onClick={this.handleClick}>
        <img
          src={require(`../hog-imgs/${this.props.hog.name
            .toLowerCase()
            .split(" ")
            .join("_")}.jpg`)}
        ></img>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
        </div>
      </div>
    ) : (
      <div className="ui eight wide column card" onClick={this.handleClick}>
        <img
          src={require(`../hog-imgs/${this.props.hog.name
            .toLowerCase()
            .split(" ")
            .join("_")}.jpg`)}
        ></img>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
        </div>
        <div className="extra content">
          Specialty: {this.props.hog.specialty}
          <div>Weight: {this.props.hog.weight} k lb(s)</div>
          <div>
            Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
          </div>
        </div>
      </div>
    );
  }
}

export default Hog;
