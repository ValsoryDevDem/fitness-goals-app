import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  background-color: transparent;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  &:active {
    background-color: #5fcb39;
`;

const ContinueButton = ({ to, children }) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default ContinueButton;
