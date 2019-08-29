import React from 'react';
import styled from 'styled-components';

import Pig from './Pig';

const PigListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

const PigList = ({ pigs }) => {
  return (
    <PigListWrapper>
      {pigs.map((pig, i) => (
        <Pig key={i} pig={pig} />
      ))}
    </PigListWrapper>
  );
};

export default PigList;
