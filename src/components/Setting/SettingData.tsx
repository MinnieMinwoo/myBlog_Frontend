import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const SettingContainer = styled.div`
  border-bottom: 1px solid #eee;
  padding: 32px 24px;
  h3 {
    width: 170px;
    display: inline-block;
    font-size: 20px;
    color: #111;
  }
  span {
    color: #333;
  }
  button {
    float: right;
    width: 96px;
  }
  p {
    margin-top: 16px;
    margin-bottom: 0px;
    font-size: 14px;
    color: #777;
  }
`;

interface Props {
  title: string;
  description: string;
  buttonMessage: string;
  onClick: () => void;
  currentData?: string;
  buttonColor?: BootStrapColor;
}

const SettingData = ({
  title,
  description,
  buttonMessage,
  onClick,
  currentData,
  buttonColor,
}: Props) => {
  return (
    <SettingContainer>
      <h3>{title}</h3>
      <span>{currentData}</span>
      <Button variant={buttonColor ?? "primary"} onClick={onClick}>
        {buttonMessage}
      </Button>
      <p>{description}</p>
    </SettingContainer>
  );
};

export default SettingData;
