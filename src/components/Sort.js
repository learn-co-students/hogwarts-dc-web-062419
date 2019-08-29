import React from "react";


const Sort = props => {
  return (
    
      <span>
          Sort By:
    <select onChange={(event) => props.sortHogs(event)}>
      <option value= "all" >All</option>
      <option value= "name" >Name</option>
      <option value= "weight" >Weight</option>
    </select>
    </span>
  );
};

export default Sort;