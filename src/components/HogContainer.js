import React, { Component } from "react";
import HogCard from "./HogCard";

export default class HogContainer extends Component {
  renderHogs = () => {
    return this.props.hogs.map(hog => {
      return <HogCard hog={hog} key={hog.id} />;
    });
  };

  render() {
    return (
      <container className="ui grid container">{this.renderHogs()}</container>
    );
  }
}

//inside of the container is where i am going to want to render my individual hog components
