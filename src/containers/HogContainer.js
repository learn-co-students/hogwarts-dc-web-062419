import React, { Component } from "react";
import Hog from "../components/Hog";

class HogsContainer extends Component {
  render() {
    const hogCards = this.props.hogs.map(hog => (
      <Hog hog={hog} key={hog.name} />
    ));
    return <div className="ui grid container">{hogCards}</div>;
  }
}
export default HogsContainer;
