import React from 'react'

const Filters = (props) => {
console.log(props)
   return (
       <div>
        <select onChange={props.onChangeGreased} >
            <option value='all'>See all hogs</option>
            <option value='greased'>Just the greased hogs please</option>
        </select>
    
        <select onChange={props.onChangeSort} >
            <option value='name'>Sort hogs by name</option>
            <option value='weight'>Sort hogs by weight</option>
        </select>       
       </div>
   )}

export default Filters