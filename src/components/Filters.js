import React from "react";

const Filter = props => {
  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select name="filter" onChange={props.onChangeGreased}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="non-greased">Non Greased</option>
      </select>
      <div>
        <br></br>
        <label htmlFor="sort"> Sort: </label>
        <select name="sort" onChange={props.onChangeSort}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label htmlFor="ascending"> Ascending </label>
        <input
          type="checkbox"
          name="ascending"
          checked={props.settings.ascending}
          onChange={props.onChangeAscend}
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Filter;
