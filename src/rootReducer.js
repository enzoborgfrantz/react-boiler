import { combineReducers } from 'redux';
import createCounterReducer from './ducks/counter.duck';

export default (dynamicReducers = {}) => {
  console.log({ dynamicReducers });
  const nextReducer = combineReducers({
    counter1: createCounterReducer('counter1'),
    ...dynamicReducers,
  });

  console.log({ nextReducer });
  return nextReducer;
};
