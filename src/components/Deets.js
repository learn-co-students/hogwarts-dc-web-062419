import React from "react";

const Deets = props => {
  if (props.showDeets) {
    return (
      <div>
        <p>Specialty: {props.specialty}</p>
        <p>{props.greased ? "Greased" : "Ungreased"}</p>
        <p>{props.weight} tons</p>
        <p>Highest Medal Achieved: {props.highestMedal}</p>
      </div>
    );
  } else {
    return null;
  }
};
export default Deets;
