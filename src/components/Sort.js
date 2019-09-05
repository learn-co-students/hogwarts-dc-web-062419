import React from "react"

const Sort = (props) => {
  return(
  <div>
    <p> Sort By: </p>
    <label htmlFor="name">Name </label>
    <input
      type="radio"
      name="name"
      checked={props.sort === "name"}
      onClick={props.sortHogs}/>
    <label htmlFor="weight">Weight </label>
    <input
      type="radio"
      name="weight"
      checked={props.sort === "weight"}
      onClick={props.sortHogs}/>
  </div>
  )
}

export default Sort