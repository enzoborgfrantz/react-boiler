const INCREMENT_VALUE = reducerName => `INCREMENT_VALUE/${reducerName}`;
const DECREMENT_VALUE = reducerName => `DECREMENT_VALUE/${reducerName}`;
const RESET_VALUE = reducerName => `RESET_VALUE/${reducerName}`;

export const incrementValue = reducerName => ({
  type: INCREMENT_VALUE(reducerName),
});

export const decrementValue = reducerName => ({
  type: DECREMENT_VALUE(reducerName),
});

export const resetValue = reducerName => ({
  type: RESET_VALUE(reducerName),
});

export const counterSelector = reducerName => ({ [reducerName]: counter }) =>
  counter;

const initialState = {
  count: 0,
};

export default reducerName => (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT_VALUE(reducerName):
      return { ...state, count: state.count + 1 };
    case DECREMENT_VALUE(reducerName):
      return { ...state, count: state.count - 1 };
    case RESET_VALUE(reducerName):
      return { ...state, count: 0 };
    default:
      return state;
  }
};
