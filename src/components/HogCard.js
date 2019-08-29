import React, { Component } from "react";

export default class HogCard extends Component {
  constructor() {
    super();
    this.state = {
      hidden: {}
    };
  }

  splitName = () => {
    return this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
  };
  //on click of the image i want a function set up to render a bunch of stuff about the information of the pic
  setHiddenAttributes = () => {
    this.setState({
      hidden: {
        weight: this.props.hog.weight,
        greased: this.props.hog.greased,
        specialty: this.props.hog.specialty,
        highestAward: this.props.hog["highest medal achieved"]
      }
    });
  };

  showHiddenAttributes = () => {
    return (
      <div className="meta">
        <ul>
          <li>Weight: {this.state.hidden.weight}</li>
          <li>Greased: {this.state.hidden.greased.toString()}</li>
          <li>Specialty: {this.state.hidden.specialty}</li>
          <li>Highest Award: {this.state.hidden.highestAward}</li>
        </ul>
      </div>
    );
  };

  showBasicInfo = () => {
    return (
      <div className="meta">
        <span className="date">Oink Oink</span>
      </div>
    );
  };

  render() {
    return (
      <div className=" ui-card ui eight wide column ">
        <div className="image">
          <img
            src={require(`../hog-imgs/${this.splitName()}.jpg`)}
            alt="boohoo"
            onClick={this.setHiddenAttributes}
          />
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
          {this.state.hidden.weight
            ? this.showHiddenAttributes()
            : this.showBasicInfo()}
        </div>
      </div>
    );
  }
}

// name: 'Porkchop',
//     specialty: 'Making friends',
//     greased: true,
//     weight: 1.6,
//     'highest medal achieved': 'silver'
