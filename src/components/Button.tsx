import React, { MouseEventHandler } from "react";
import styled from "styled-components";

type ButtonProps = {
  content: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ButtonBox = styled.div`
  color: #fff;
  background-color: #fe92c4;
  border-radius: 4px;
  margin: 40px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f9b6c7;
  }
`;

const Button = ({ content, onClick }: ButtonProps) => {
  return <ButtonBox onClick={onClick}>{content}</ButtonBox>;
};

Button.defaultProps = {
  content: "뒤로가기",
};

export default Button;
