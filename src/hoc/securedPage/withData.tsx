import React, {Component} from 'react';
import {getCookie} from '@/utils/session';
import redirect from '@/utils/redirect';

export default (ComposedComponent: any) =>
  class WithData extends Component {
    static async getInitialProps(context: any) {
      const isLoggedIn = getCookie('user_id', context.req) ? true : false;
      if (!isLoggedIn) {
        redirect(context, '/');
      }
      return {isLoggedIn};
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
