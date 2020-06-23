import React, {Component} from 'react';

export default (ComposedComponent: any) =>
  class WithData extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
