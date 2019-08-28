import React, { Component } from "react";

const Filter = props => {
  return (
    <select onChange={props.filterHogs}>
      <option value= "true" >Greased</option>
      <option value= "false" >Not Greased</option>
    </select>
  );
};

export default Filter;
