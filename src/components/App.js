import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import helloWorld from 'modules/hello.module';
import Counter from '../containers/Counter';
import { Provider } from 'react-redux';
import store, { injectAsyncReducer, removereducer } from '../store';
import createCounterReducer from '../ducks/counter.duck';

class App extends Component {
  state = {
    storeKey: 0,
  };

  reloadStore = () => {
    console.log('reloading');
    this.setState({
      storeKey: ++this.state.storeKey,
    });
  };

  render() {
    return (
      <Provider key={this.state.storeKey} store={store}>
        <div>
          hello: {this.state.storeKey}
          <Counter />
          <button onClick={this.reloadStore}>next store in</button>
          <button
            onClick={() => {
              const reducerName = `counter${this.state.storeKey}`;
              injectAsyncReducer(
                reducerName,
                createCounterReducer(reducerName)
              );
            }}
          >
            add reducer
          </button>
          <button onClick={() => removereducer('counter1')}>
            remove reducer
          </button>
        </div>
      </Provider>
    );
  }
}

export default App;
