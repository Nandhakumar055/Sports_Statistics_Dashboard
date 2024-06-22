import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-image: linear-gradient(to right, rgb(141, 4, 100), rgb(99, 3, 143));
  padding: 20px;
  color: white;
  text-align: center;
  width:100%;
  border-bottom-right-radius: 100px;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Sports Statistics Dashboard</h1>
    <p>Overview of team performance statistics</p>
  </HeaderContainer>
);

export default Header;
