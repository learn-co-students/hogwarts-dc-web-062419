import React from 'react'
import HogDetails from './HogDetails'

export default class Hog extends React.Component {
    constructor(){
        super()
        this.state = {
            showHogDeets: false
        }
    }
  
    changeShowDetails = ()=>{
        this.setState({showHogDeets: !this.state.showHogDeets})
    }
    
    render(){
        let imageName = this.props.hog.name.toLowerCase().split(' ').join('_')

        return (
        <div className='ui card' onClick={this.changeShowDetails}>
            <div className='content'>
                <div className='header'>
                    {this.props.hog.name}
                </div>
                <img src={require(`../hog-imgs/${imageName}.jpg`)} alt='it is a hog' />
            </div>
            { 
                this.state.showHogDeets ? <HogDetails {...this.props} /> : null 
            }
        </div> 
        )
    }
}