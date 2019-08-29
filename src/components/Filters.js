import React from 'react';

const Filters = (props) => {
    return (
        <div className="dropdown-container">
            <label>Filter:</label>
            <select onChange={props.handleFilter} className="dropdown">
                <option value="all">Show all</option>
                <option value="greased">Show greased pigs</option>
                <option value="ungreased">Show ungreased pigs</option>
            </select>
            <label>Sort:</label>
            <select onChange={props.handleSort} className="dropdown">
                <option value="unordered">--</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
}
export default Filters;