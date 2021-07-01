import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    content:string;
};

const ButtonBox = styled.div`
color: #FFF;
background-color: #fe92c4;
border-radius: 4px;
margin: 40px;
padding: 10px 15px;
font-weight: bold;
cursor:pointer;

&:hover {
    background-color: #f9b6c7;
}
`

const Button = ({content}: ButtonProps ) => {
  return (
    <ButtonBox>
        {content}
    </ButtonBox>
  );
};

Button.defaultProps = {
    content: "뒤로가기"
};

export default Button;