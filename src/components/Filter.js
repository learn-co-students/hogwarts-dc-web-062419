import React from "react";

const Filter = props => {
  return (
      <span>
      Filter:
    <select  onChange={(event) => props.filterHogs(event)}>
      <option value= "all" >All</option>
      <option value= "true" >Greased</option>
      <option value= "false" >Not Greased</option>
    </select>
    </span>
  );
};

export default Filter;
