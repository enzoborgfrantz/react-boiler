import React from 'react';
import styled from 'styled-components';
import { tangerine, gray, iceGray, darkGray, red } from '../styles/colors';

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextInputStyle = styled.input`
  height: 35px;
  width: 100%;
  font-size: 18px;
  outline: none;
  border: none;
  color: ${darkGray};
  border: 1px solid ${iceGray};
  border-radius: 4px;
  padding: 5px;
  font-weight: 300;
  appearance: none;
  box-sizing: border-box;
  ::placeholder {
    color: ${gray};
    text-transform: capitalize;
  }
`;

const SmallText = styled.div`
  color: ${darkGray};
  margin-bottom: 2px;
  font-family: system-ui;
  text-transform: capitalize;
  font-size: 12px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ visible }) => visible && `transition: opacity 0.2s ease-in;`};
`;

const ErrorText = styled(SmallText)`
  color: ${red};
`;

const CloseButton = styled.button`
  color: ${darkGray};
  position: absolute;
  font-size: 18px;
  font-weight: 300;
  height: 100%;
  right: 5px;
  top: 0;
  height: 100%
  appearance: none;
  background: transparent;
  border: none;
  transition: transform 0.25s ease-in;
  outline: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const TextInputContainer = styled.div`
  position: relative;
`;

const TextInput = ({ type, placeholder, value, setValue, error }) => (
  <TextInputWrapper>
    <SmallText visible={!!value}>{placeholder}</SmallText>
    <TextInputContainer>
      <TextInputStyle
        type={type}
        placeholder={placeholder}
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
      />
      {value && <CloseButton onClick={() => setValue('')}>×</CloseButton>}
    </TextInputContainer>
    {error && <ErrorText visible={!!error}>{error}</ErrorText>}
  </TextInputWrapper>
);

export default TextInput;
