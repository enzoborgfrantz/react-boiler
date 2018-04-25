import React from 'react';
import styled from 'styled-components';
import { tangerine, iceGray } from '../styles/colors';

const ButtonStyle = styled.button`
  height: 35px;
  appearance: none;
  background-color: ${tangerine};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${iceGray};
  font-size: 12px;
  font-weight: 300;
  outline: none;
  padding: 10px;
  width: 100%;
  border: 1px solid transparent;
  transition: opacity 0.2s ease-in, transform 0.1s linear;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:active {
    transform: translateX(5px);
  }
`;

const Button = ({ children, ...props }) => (
  <ButtonStyle {...props}>{children}</ButtonStyle>
);

export default Button;
