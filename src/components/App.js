import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import '../App.css';
import Nav from './Nav';
import PigContainer from './PigContainer';

const theme = {
  colors: {
    primaryColor: '#8cc8f5',
    mainWhite: '#fff',
    offWhite: '#f7f7f7',
    mainBlack: '#222',
    mainGrey: '#ececec',
    darkGrey: '#afafaf',
    lightShadow: '2px 5px 3px 0px rgba(0, 0, 0, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(0, 0, 0, 0.5)',
  },
  mainTransition: 'all 0.3s linear',
  mainSpacing: '4px',
};

const AppWrapper = styled.div`
  text-align: center;
  margin: 1% 5%;
  background: ${props => props.theme.colors.mainWhite};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Nav />
          <PigContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
