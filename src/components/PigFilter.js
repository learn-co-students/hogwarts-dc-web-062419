import React from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 50vw;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const NameFilter = styled.input`
  border: none;
  text-align: center;
  border-bottom: 1px solid grey;
  font-size: 15px;
`;

const PigFilter = ({
  searchTerm,
  onInputChange,
  filterGreasers,
  onFilterGreasersChange,
  onSortPigsChange,
}) => {
  return (
    <Filters>
      <NameFilter
        type="text"
        placeholder="Filter Pigs by Name"
        value={searchTerm}
        onChange={onInputChange}
      />
      <div>
        <label htmlFor="greased">Filter Greasers:</label>
        <input
          type="checkbox"
          name="greased"
          checked={filterGreasers}
          onChange={onFilterGreasersChange}
        />
      </div>
      <label htmlFor="sort">Sort Pigs By: </label>
      <select name="sort" onChange={onSortPigsChange}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </Filters>
  );
};

export default PigFilter;
