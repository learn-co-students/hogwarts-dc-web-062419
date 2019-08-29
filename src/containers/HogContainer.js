import React, { Component } from "react";
import Hog from "../components/Hog";

import { hostname } from "os";
class HogsContainer extends Component {
  hogCards = () => {
    return this.props.hogs.map(hog => {
      return <Hog hog={hog} key={hog.name} />;
    });
  };

  render() {
    return <div className="ui grid container">{this.hogCards()}</div>;
  }
}
export default HogsContainer;
