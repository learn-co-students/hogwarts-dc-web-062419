import React from 'react'


const HogDetail = ({name, specialty, greased, weight, highestMedalAchieved}) => {

            
    return(
        <div className='meta'>
            <p>specialty: {specialty}</p>
            <p>greased? {greased === true ? "Yes" : "No"}</p>
            <p>weight: {weight}</p>
            <p>Highest Medal Achieved: {highestMedalAchieved}</p>
     
        </div>
    )
}


export {HogDetail}