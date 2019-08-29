import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>Grease Filter</label>
        <br></br>
        <select>
          <option>Greased</option>
          <option>Not Greased</option>
        </select>
      </div>
    );
  }
}

export default Filter;
