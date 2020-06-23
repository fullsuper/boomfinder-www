import React from 'react';
import { IntlProvider } from 'react-intl';
import AppLocale from '../lngProvider';

const currentAppLocale = AppLocale['en'];
export default (ComposedComponent: any) => (props: any) => (
  <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
    <ComposedComponent {...props} />
  </IntlProvider>
);
