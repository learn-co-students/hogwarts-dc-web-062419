import React, { Component } from "react";

const Sort = props => {
  return (
    <select onChange={(event) => props.sortHogs(event)}>
      <option value= "all" >All</option>
      <option value= "name" >Name</option>
      <option value= "weight" >Weight</option>
    </select>
  );
};

export default Sort;