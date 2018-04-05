import React, { Component } from 'react';
import { number } from 'prop-types';
import debounce from 'lodash/debounce';

export const pubSub = () => {
  const subscribers = new Set();

  const sub = fn => {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  };

  const pub = data => subscribers.forEach(fn => fn(data));

  return Object.freeze({ pub, sub });
};

const {
  pub: scrollAndResizePublisher,
  sub: scrollAndResizeSubscriber,
} = pubSub();

const debouncedScrollAndResizePublisher = debounce(
  scrollAndResizePublisher,
  500
);

window.addEventListener('scroll', debouncedScrollAndResizePublisher);
window.addEventListener('resize', debouncedScrollAndResizePublisher);

class LazyRender extends Component {
  static defaultProps = {
    offset: 50,
  };

  state = {
    shouldRender: false,
  };

  constructor(props) {
    super(props);
    this.scrollAndResizeUnsubscriber = scrollAndResizeSubscriber(() =>
      this.checkView()
    );
  }

  componentWillUnmount() {
    this.scrollAndResizeUnsubscriber();
  }

  checkView = () => {
    const { innerHeight, pageYOffset } = window;
    const isInView = pageYOffset + innerHeight >= this.node.offsetTop;
    if (isInView) {
      this.setState({ shouldRender: true });
      this.scrollAndResizeUnsubscriber();
    }
  };

  render() {
    const { shouldRender } = this.state;
    const { children } = this.props;
    return (
      <div
        style={{ border: '1px solid cyan' }}
        ref={node => (this.node = node)}
      >
        {shouldRender && children}
      </div>
    );
  }
}

LazyRender.propTypes = {
  offset: number,
};

export default LazyRender;
