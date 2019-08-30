import React from 'react'
import hogs from '../porkers_data'


class Filter extends React.Component {




    render() {
        return(
            <div className='ui grid'>
                <div className='row centered'>
                    <select className='ui selection dropdown'onChange={this.props.onGreasedHogs}>
                        <option value='all'>All</option>
                        <option value='greased'>Greased</option>
                        <option value='dry'>Dry</option>
                    </select>
                </div>

                <div className='row centered'>
                    <select className='ui selection dropdown' onChange={this.props.onSelectChange}>
                        <option value="">Sort: Off</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
            </div>
        )
    }

}

export default Filter