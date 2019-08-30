import React from 'react'
import Hog from './Hog'

class HogContainer extends React.Component {

    renderHogs = () => {
       return this.props.hogs.map(hog => <Hog hog={hog} />)
    }

    
    render(){
        return(
            <div id='hog-container' className='ui grid container'>
                <div className='ui three cards'>
                {this.renderHogs()}
                </div>
            </div>
        )
    }
}

export default HogContainer