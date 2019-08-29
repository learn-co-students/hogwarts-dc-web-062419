import React, { Component } from 'react';
import Deets from './Deets.js'

class Hog extends Component {
    state = {
        showDeets: false,
        hide: false
    }

    handleClick = () => {
        this.setState({showDeets: !this.state.showDeets})
    }

    hide = () => {
        this.setState({hide: true}, console.log("hitting this - hide is:" + this.state.hide))
    }

    render() { 
        const {name,specialty,greased,weight} = this.props.deets
        return (
            this.state.hide ? (null) :
            (<div className="ui eight wide column">
                <img src={require(`../hog-imgs/${this.props.slug}.jpg`)} alt={name} onClick={this.handleClick} />
                <h2>{name}</h2>
                <Deets 
                    key={this.props.slug}
                    specialty={specialty}
                    greased={greased}
                    weight={weight}
                    highestMedal={this.props.highestMedal}
                    showDeets={this.state.showDeets}
                />
                <button onClick={this.hide}>Hide Pig</button>
            </div>)
        )
    }
}
export default Hog;