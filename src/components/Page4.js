import React from "react";
import styled from "styled-components";
import { pic11 } from '../data/data';

const Page4 = () => (
  <Container>
    <Banner>
      <Text1>Physical exercise</Text1>
      <Text2>
        Physical exercise means a lot for a woman who wants to lose kilos and works at the office.
      </Text2>
    </Banner>
    <Text3>How active are you during the day?</Text3>
    <ContentContainer>
      <StyledImage>
        <p>{pic11}</p>
      </StyledImage>
      <ButtonContainer>
        <StyledButton1>Hardly at all</StyledButton1>
        <StyledButton2>Fitness 1-2 times a week</StyledButton2>
        <StyledButton3>Fitness 3-5 times a week</StyledButton3>
        <StyledButton4>Fitness 5-7 times a week</StyledButton4>
      </ButtonContainer>
    </ContentContainer>
  </Container>
);

export default Page4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px; 
`;

const StyledImage = styled.div`
  width: 173px;
  height: 363px;
  background: #FFFFFF;
  margin-right: 10px; 
  p {
    margin: 0; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const buttonStyles = `
  width: 172px;
  height: 44px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #2D3436;
  background-color: transparent;
  border: 1px solid #E1E1E1; 
  border-radius: 20px; 
  margin-top: 10px; 
  &:active {
    background-color: #5fcb39;
`;

const StyledButton1 = styled.button`
  ${buttonStyles}
`;

const StyledButton2 = styled.button`
  ${buttonStyles}
`;

const StyledButton3 = styled.button`
  ${buttonStyles}
`;

const StyledButton4 = styled.button`
  ${buttonStyles}
`;
