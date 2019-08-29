import React, { Component } from 'react';

import hogs from '../porkers_data';
import PigList from './PigList';
import PigFilter from './PigFilter';

export default class PigContainer extends Component {
  state = {
    pigs: hogs,
    searchTerm: '',
    filterPigs: 'all',
    sortPigs: 'name',
  };

  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  filterPigs() {
    return this.state.pigs.filter(pig => {
      if (this.state.filterPigs === 'dry') {
        return pig.name.toLowerCase().includes(this.state.searchTerm) && pig.greased === false;
      } else if (this.state.filterPigs === 'greasy') {
        return pig.name.toLowerCase().includes(this.state.searchTerm) && pig.greased === true;
      } else {
        return pig.name.toLowerCase().includes(this.state.searchTerm);
      }
    });
  }

  onFilterGreasersChange = e => {
    this.setState({ filterPigs: e.target.value });
  };

  sortPigsByName = pigs => {
    return pigs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  sortPigsByWeight = pigs => {
    return pigs.sort((a, b) => {
      if (a.weight < b.weight) {
        return -1;
      }
      if (a.weight > b.weight) {
        return 1;
      }
      return 0;
    });
  };

  onSortPigsChange = e => {
    this.setState({
      sortPigs: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <PigFilter
          searchTerm={this.state.searchTerm}
          onInputChange={this.onInputChange}
          filterGreasers={this.state.filterPigs}
          onFilterGreasersChange={this.onFilterGreasersChange}
          onSortPigsChange={this.onSortPigsChange}
        />
        <PigList
          pigs={
            this.state.sortPigs === 'name'
              ? this.sortPigsByName(this.filterPigs())
              : this.sortPigsByWeight(this.filterPigs())
          }
        />
      </div>
    );
  }
}
