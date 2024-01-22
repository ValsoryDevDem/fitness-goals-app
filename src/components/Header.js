import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {header} from "../data/data"


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.pathname !== '/') {
      navigate(-1); // Go back to the previous page
    }
  };

  return (
   <>
      <BackHeader onClick={handleGoBack}>{header}</BackHeader>
   </>
  );
};

export default Header;


const BackHeader = styled.span`
position: absolute;
width: 100%; /* Adjust the width to cover the full width of the container */
height: 50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
cursor: pointer;
text-align: center;
`;
