import React from 'react'
import Hog from './Hog'

const HogPen = (props)=> {
    
        return (
            <div className='ui cards'> 
                {
                    props.hogsToDisplay.map(hogObject => <Hog key={hogObject.name} hog={hogObject} />)
                }
                    {/* we use .map() here bc .map() dynamically generates
                     a new array. that way, we'd have a new array of Hog JSXs */}
            </div>
        )
}

export default HogPen
