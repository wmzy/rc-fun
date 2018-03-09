import React, {Component, PropTypes} from 'react';

function eventWithData(OriginalComponent, eventProp, dataProp = 'data') {
  return class ExComponent extends Component {
    static propTypes = {
      [dataProp]: PropTypes.any,
      [eventProp]: PropTypes.func
    };

    handleEvent = (...params) => {
      const data = this.props[dataProp];
      this.props[eventProp](data, ...params);
    };

    render() {
      const {...props} = this.props;

      delete props[dataProp]

      const propEx = {};
      if (props[eventProp]) propEx[eventProp] = this.handleEvent;

      return <OriginalComponent {...props} {...propEx} />;
    }
  };
}

export default eventWithData;
