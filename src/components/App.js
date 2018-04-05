import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import helloWorld from 'modules/hello.module';
import LazyRender from './LazyRender';

const Wrapper = styled.div`
  padding: 5px;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`;

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: white;
  opacity: 0.75;
  font-family: Arial;
  transition: all 0.35s ease-in;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const App = ({ text }) => (
  <Wrapper>
    <div style={{ height: '1000px' }}>
      <Title>{`${text} :)`}</Title>
    </div>
    <LazyRender>
      <img
        width={200}
        height={200}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
      />
    </LazyRender>
    <LazyRender>
      <img
        width={200}
        height={200}
        src="https://brickmakingmachinee.com/wp-content/uploads/2018/03/img-1276321340-1509471668915.jpg"
      />
    </LazyRender>
  </Wrapper>
);

App.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function() {
  const result = helloWorld();
  return <App text={result} />;
}
