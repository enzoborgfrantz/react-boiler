import styled from 'styled-components';
import React from 'react';
import Button from './Button';
import Input from './Input';
import Form from './Form';

const AppWrapper = styled.div`
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  > * {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const App = () => (
  <AppWrapper>
    <Form
      render={({ setStateProperty, getStateProperty }) => (
        <Row>
          <Input
            type="text"
            placeholder="weight"
            value={getStateProperty('weight')}
            setValue={setStateProperty('weight')}
          />
          <Button onClick={() => console.log(getStateProperty('weight'))}>
            click me
          </Button>
        </Row>
      )}
    />
  </AppWrapper>
);

export default () => <App />;
