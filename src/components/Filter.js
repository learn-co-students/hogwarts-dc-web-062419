import React, { Component } from "react";

const Filter = props => {
  return (
    <select  onChange={(event) => props.filterHogs(event)}>
      <option value= "all" >all</option>
      <option value= "true" >Greased</option>
      <option value= "false" >Not Greased</option>
    </select>
  );
};

export default Filter;
