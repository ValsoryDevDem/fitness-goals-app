import React from "react";
import styled from "styled-components";
import ContinueButton from "./ContinueButton";
import { pic5, pic6, pic7, pic8, pic9, pic10 } from "../data/data";

const Page3 = () => {
  return (
    <Container>
      <Banner>
        <Text1>Destructive behaviors</Text1>
        <Text2>We all have them! Which are yours?</Text2>
      </Banner>
      <ButtonContainer>
        <Button>{pic5}</Button>
        <Button>{pic6}</Button>
        <Button>{pic7}</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>{pic8}</Button>
        <Button>{pic9}</Button>
        <Button>{pic10}</Button>
      </ButtonContainer>

      <StyledContinueButton>
        <ContinueButton to="/page4">Continue</ContinueButton>
      </StyledContinueButton>
    </Container>
  );
};

export default Page3;

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
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #2d3436;
`;

const Text2 = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #616161;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Button = styled.button`
background-color: transparent;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer; 

  &:active {
    background-color: #5fcb39;
`;

const StyledContinueButton = styled.button`
  position: absolute;
  left: 37.5%;
  right: 37.5%;
  top: 88.72%;
  bottom: 25.12%;
  height: 50px;
  background: #5fcb39;
  opacity: 0.3;
  border-radius: 12px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
  text-decoration: none;
`;
