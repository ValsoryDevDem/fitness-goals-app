import React from 'react';
import ContinueButton from './ContinueButton';
import styled from 'styled-components';
import { pic1, pic2, pic3, pic4 } from '../data/data';

const Page1 = () => {
  return (
    <Container>
      <Banner>
        <Text1>The Goal</Text1>
        <Text2>
          Focus on the health benefits you need.<br />
          Balanced nutrition will let you achieve them.
        </Text2>
      </Banner>
      <Text3>What are your goals?</Text3>
      <ButtonsContainer>
        <ContinueButton to="/page2">{pic1}</ContinueButton>
        <ContinueButton to="/page2">{pic2}</ContinueButton>
        <ContinueButton to="/page2">{pic3}</ContinueButton>
        <ContinueButton to="/page2">{pic4}</ContinueButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Page1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Banner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const Text1 = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #2D3436;
`;

const Text2 = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #616161;
  margin-top: 10px;
`;

const Text3 = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #2D3436;
  margin-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

`;

