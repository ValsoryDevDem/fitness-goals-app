import React, { useState } from "react";
import ContinueButton from "./ContinueButton";
import styled from "styled-components";


const Page2 = () => {
  const [isLeftPressed, setIsLeftPressed] = useState(true);

  const handleButtonClick = () => {
    setIsLeftPressed(!isLeftPressed);
  };

  return (
    <Container>
      <StyledDoubleButton>
        <StyledButton
          isLeft={true}
          onClick={handleButtonClick}
          isActive={isLeftPressed}
        >
          IMPERIAL
        </StyledButton>
        <StyledButton
          isLeft={false}
          onClick={handleButtonClick}
          isActive={!isLeftPressed}
        >
          METRIC
        </StyledButton>
      </StyledDoubleButton>
      <StyledInputFields>
        <input
          type="text"
          placeholder={isLeftPressed ? "Height(ft)" : "Height(cm)"}
        />
        <input
          type="text"
          placeholder={
            isLeftPressed ? "Current weight(lbs)" : "Current weight(kg)"
          }
        />
      </StyledInputFields>
      <StyledContinueButton>
        <ContinueButton to="/page3">Continue</ContinueButton>
      </StyledContinueButton>
    </Container>
  );
};

export default Page2;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
`;

const StyledDoubleButton = styled.div`
  position: relative;
  width: 360px;
  height: 32px;
  display: flex;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  flex: 1;
  height: 100%;
  border: 1px solid #5FCB39;
  border-radius: ${(props) => (props.isLeft ? '10px 0 0 10px' : '0 10px 10px 0')};
  background: ${(props) => (props.isActive ? 'rgba(95, 203, 57, 0.2)' : 'transparent')};
  color: ${(props) => (props.isActive ? '#5FCB39' : '#000')};
  font-family: 'Inter';
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledInputFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    width: 360px;
    height: 32px;
    border: 1px solid #5fcb39;
    border-radius: 10px;
    margin-top: 10px;
    padding: 0 10px;
  }
`;

const StyledContinueButton = styled.button`
position: absolute;
left: 37.5%;
right: 37.5%;
top: 68.72%;
bottom: 25.12%;
height: 50px;
background: #5FCB39;
opacity: 0.3;
border-radius: 12px;
font-family: 'Inter';
font-weight: 700;
font-size: 18px;
line-height: 26px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
letter-spacing: 0.2px;
color: #FFFFFF;
text-decoration: none;
`;
