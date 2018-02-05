import React from 'react';

const Counter = ({ reducerName, count, increment, decrement, reset }) => (
  <div>
    <span>count: {count}</span>
    <button onClick={() => decrement(reducerName)}>-</button>
    <button onClick={() => increment(reducerName)}>+</button>
    <button onClick={() => reset(reducerName)}>reset</button>
  </div>
);

export default Counter;
