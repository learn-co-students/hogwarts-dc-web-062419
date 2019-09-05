import React from "react"
import HogTile from "../components/HogTile"

const HogContainer = (props) => {
  return(
  <div>
    {props.hogs.map(hog => <HogTile hog={hog} key={hog.name}/>)}
  </div>
  )}

export default HogContainer