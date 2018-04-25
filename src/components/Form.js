import { Component } from 'react';

class Form extends Component {
  state = {
    weight: '',
  };

  setStateProperty = key => value => {
    this.setState({ [key]: value });
  };

  getStateProperty = key => this.state[key];

  render() {
    return this.props.render({
      setStateProperty: this.setStateProperty,
      getStateProperty: this.getStateProperty,
    });
  }
}

export default Form;
