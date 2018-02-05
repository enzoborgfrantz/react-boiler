import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = (count = 5) => ({
  counter1: {
    count,
    time: new Date().getTime(),
  },
});

const store = createStore(rootReducer(), initialState(5));
store.dynamicReducers = {};
store.subscribe(() => console.log(store.getState()));

export const injectAsyncReducer = (reducerName, dynamicReducer) => {
  if (store.dynamicReducers[reducerName]) return;

  store.dynamicReducers[reducerName] = dynamicReducer;
  store.replaceReducer(rootReducer(store.dynamicReducers));
};

export const removereducer = reducerName => {
  if (store.dynamicReducers.counter0) {
    console.log('deleting');
    store.dynamicReducers.counter0 = (state = {}) => state;
    console.log('befroe: ', store.dynamicReducers);
    console.log(store);
    delete store.dynamicReducers.counter0;
    console.log('after', store.dynamicReducers);
    store.replaceReducer(rootReducer(store.dynamicReducers));
  } else {
    console.log('not found', store.dynamicReducers);
  }
};

export default store;
