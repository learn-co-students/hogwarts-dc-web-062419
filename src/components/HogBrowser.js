import React, { Component } from 'react';
import Hog from './Hog.js'
import Filters from './Filters.js'

class HogBrowser extends Component {
    state = {
        hogSet: this.props.hogs,
        orderedHogs: this.props.hogs,
        currentSort: "unordered"
    }

    updateDisplayArray = () => {
        switch (this.state.currentSort) {
            case "name":
                this.setState({orderedHogs: this.state.hogSet.sort((a, b) => (a.name > b.name) ? 1 : -1)})
            break;
            case "weight":
                this.setState({orderedHogs: this.state.hogSet.sort((a, b) => (a.weight > b.weight) ? 1 : -1)})
            break;
            default: 
                this.setState({orderedHogs: this.state.hogSet})
        }
    }

    handleFilter = (event) => {
        const filterChoice = event.target.value
        let filteredList
        if (filterChoice === "greased") {
            filteredList = this.props.hogs.filter(hog => {return hog.greased===true})
        } else if (filterChoice === "ungreased") {
            filteredList = this.props.hogs.filter(hog => {return hog.greased===false})
        } else {
            filteredList = this.props.hogs
        }
        this.setState({hogSet: filteredList}, this.updateDisplayArray)
    }

    handleSort = (event) => {
        this.setState({currentSort: event.target.value}, this.updateDisplayArray)
    }

    render() { 
        return (
            <div>
                < Filters handleFilter={this.handleFilter} 
                        handleSort={this.handleSort} 
                />
                <div className="ui grid container">
                    {this.state.orderedHogs.map(hog => <Hog 
                        key={hog.name.toLowerCase().replace(/ /g,"_")}
                        deets={hog}
                        highestMedal={hog["highest medal achieved"]}
                        slug={hog.name.toLowerCase().replace(/ /g,"_")}
                    />)}
                </div>
            </div>
        );
    }
}
export default HogBrowser;