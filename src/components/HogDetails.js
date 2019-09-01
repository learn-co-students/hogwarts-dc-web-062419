import React from 'react'

const HogDetails = (props) => {
    console.log(props.hog.name)
        return (
          <div className='extra content'>
             <div>
                 <p>Specialty: {props.hog.specialty} </p>
                 <p>Highest Medal Achieved: {props.hog["highest medal achieved"]}</p>
                 <p>Weight: {props.hog.weight}</p>
                 <p>Greasy? {props.hog.greased.toString()}</p> 
             </div>
         </div>
        )
}

export default HogDetails
