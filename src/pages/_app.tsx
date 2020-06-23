import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Wrapper from '../redux/store/index';

import '@/styles/vendors/flag/sprite-flags-24x24.css';
import '@/styles/vendors/material-design-iconic-font/css/material-design-iconic-font.min.css';
import '@/styles/vendors/weather-icons/css/weather-icons.min.css';
import '@/styles/vendors/react-select/react-select.css';
import '@/styles/vendors/animate.css';
import '@/styles/vendors/bootstrap-rtl.css';
import '@/styles/vendors/loader.css';
import '../../node_modules/react-notifications/lib/notifications.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '@/styles/bootstrap.scss';
import '@/styles/app.scss';
import '@/styles/app-rtl.scss';

class App extends NextApp<any, any> {
  static async getInitialProps({ Component, ctx }: any) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

export default Wrapper.withRedux(App);
