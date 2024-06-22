import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  width:100%;
  min-width: 616px;
  background-image: linear-gradient(to left, rgb(240, 146, 224), white);
  min-height: 100vh;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Dashboard />
  </AppContainer>
);

export default App;
