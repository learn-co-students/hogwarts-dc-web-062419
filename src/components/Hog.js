import React from 'react'
import {HogDetail} from './HogDetail'

class Hog extends React.Component {


    constructor(){
        super()
        this.state = {
            hidden: true
        }
    }

    
    toggleHidden = () => {
        if (this.state.hidden === true) {
            this.setState({
                hidden: false
            }) 
        } else {
            this.setState({
                hidden: true
            })
        }
    }
    
    render (){

        const {hog: {name, specialty, greased, weight, pic}} = this.props

      let displayDetails = () => {
            if (this.state.hidden === false) {
               return (<HogDetail name={name} specialty={specialty} greased={greased} weight={weight} highestMedalAchieved={this.props.hog['highest medal achieved']}/>)
            }
        }
        
 return(
     <div className="card" >
         <div className="image">
            <img onClick={this.toggleHidden} className='image' alt='' src={require(`../hog-imgs/${pic}`)}></img>
        </div>
        <div className='content'>
                <div className='header'>
                    <p>{name}</p>
                    {displayDetails()}
                </div>
         </div>
     </div>
 )


 }
}

export default Hog