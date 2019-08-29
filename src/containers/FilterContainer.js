import React, { Component } from "react";
import Filter from "../components/Filters";

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFilterGrease = ({ target: { value } }) => {
    this.setState({ greased: this.state.greased, greased: value });
  };

  render() {
    return (
      <div>
        <Filter onFilterGrease={this.onFilterGrease} />
      </div>
    );
  }
}

export default FilterContainer;
