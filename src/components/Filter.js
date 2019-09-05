import React from "react"

const Filter = (props) => {
  return(
    <div>
      <p>Greased Hogs</p>
        <input
          type="checkbox"
          name="Greased"
          checked={props.showGreased}
          onChange={props.toggleGreased}
          />
    </div>
  )
}

export default Filter