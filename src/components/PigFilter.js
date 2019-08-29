import React from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;

  .filters {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const NameFilter = styled.input`
  border: none;
  text-align: center;
  width: 300px;
  margin: 0 auto;
  border-bottom: 2px solid grey;
  font-size: 20px;

  :focus {
    border-bottom: 2px solid rgb(245, 169, 188);
  }
`;

const PigSelect = styled.select`
  display: block;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  color: var(--mainBlack);
  line-height: 1.3;
  padding: 10px 20px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>")
    no-repeat;
  background-size: 12px;
  background-position: calc(100% - 10px) center;
  background-repeat: no-repeat;
`;

const SelectWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
`;

const PigFilter = ({
  searchTerm,
  onInputChange,
  filterPigs,
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
      <div className="filters">
        <SelectWrapper>
          <label htmlFor="greased">Filter Greasy Pigs:</label>
          <PigSelect onInput={onFilterGreasersChange} value={filterPigs}>
            <option value="all">All Pigs</option>
            <option value="greasy">Greasy Pigs</option>
            <option value="dry">Dry Pigs</option>
          </PigSelect>
        </SelectWrapper>

        <SelectWrapper>
          <label htmlFor="sort">Sort Pigs By: </label>
          <PigSelect name="sort" onChange={onSortPigsChange}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </PigSelect>
        </SelectWrapper>
      </div>
    </Filters>
  );
};

export default PigFilter;
