import piggy from '../porco.png';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
  margin-bottom: 2%;

  .header-text {
    color: #f5a9bc;
    font-size: 3em;
    margin: 0% 2% 0% 2%;
  }

  .normal-text {
    font-family: Georgia, serif;
    font-size: 0.75em;
  }

  .twirly-pig {
    transition: all 3s ease-in-out;
    display: inline;
  }

  .twirly-pig:hover {
    transform: scale(1.5);
  }

  .app-logo {
    animation: app-logo-spin infinite 5s linear;
    height: 80px;
    transition: all 0.2s ease-in-out;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <span className="header-text">Hogwarts</span>
      <div className="twirly-pig">
        <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
          <img src={piggy} className="app-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </NavWrapper>
  );
};

export default Nav;
