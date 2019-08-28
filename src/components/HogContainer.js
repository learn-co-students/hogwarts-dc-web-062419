import React, { Component } from "react";
import HogTile from "./HogTile";
// import { threadId } from "worker_threads";

class HogContainer extends Component {
  
  
  
  render() {
    return (
      <div>
        {this.props.hogs.map(hog => (
          <HogTile hog={hog} key={hog.name} showDetails={this.showDetails} />
        ))}
      </div>
    );
  }
}

export default HogContainer;
