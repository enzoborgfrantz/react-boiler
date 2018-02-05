import { connect } from 'react-redux';
import {
  counterSelector,
  incrementValue,
  decrementValue,
  resetValue,
} from '../ducks/counter.duck';
import Counter from '../components/Counter';

export default connect(counterSelector('counter1'), {
  increment: incrementValue,
  decrement: decrementValue,
  reset: resetValue,
})(Counter);
