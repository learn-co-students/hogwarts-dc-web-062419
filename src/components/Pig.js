import React, { useState } from 'react';
import styled from 'styled-components';

const PigWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  min-width: 300px;

  img {
    width: 100%;
  }

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .details {
    padding: 2rem;
  }
`;

const Pig = ({ pig }) => {
  const [isHidden, setIsHidden] = useState(false);
  const image = require(`../hog-imgs/${pig.name.toLowerCase().replace(/ /g, '_')}.jpg`);
  return (
    <PigWrapper onClick={() => setIsHidden(!isHidden)}>
      <img src={image} alt={pig.name} />
      <div className="details" hidden={isHidden}>
        <h2>{pig.name}</h2>
        <p>Speciality: {pig.specialty}</p>
        <p>{pig.greased ? 'Im a greasy boy' : 'Im not a greasy boy'}</p>
        <p>Weight: {pig.weight}</p>
        <p>Highest Medal Earned:{pig['highest medal achieved']}</p>
      </div>
    </PigWrapper>
  );
};

export default Pig;
