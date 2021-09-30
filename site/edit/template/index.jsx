import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import thTH from 'antd/es/locale/th_TH';

import enLocale from '../en-US';
import thLocale from '../th-TH';

import Layout from './layout';

import store from '../../shared/redux';
import { isThTH } from '../../theme/template/utils';
import '../static/style';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = isThTH(pathname) ? thLocale : enLocale;

    this.state = {
      appLocale,
    };
  }

  render() {
    const { appLocale } = this.state;
    return (
      <Provider store={store}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
          <ConfigProvider locale={appLocale.locale === 'th-TH' ? thTH : null}>
            <Layout {...this.props} />
          </ConfigProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

export default Edit;
