import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'header3 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header3-logo',
      children:
        'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
    },
    Menu: {
      className: 'header3-menu',
      children: [
        {
          name: 'linkNav~login',
          to: 'login',
          children: 'Login',
          className: 'menu-item',
          disabled: true,
          drawer: true,
        },
        {
          name: 'linkNav~register',
          to: 'register',
          children: 'Register',
          className: 'menu-item',
          disabled: true,
          drawer: true,
        },
        {
          name: 'linkNav',
          to: 'The ID address of the current page, See above',
          children: 'About',
          className: 'menu-item',
        },
      ],
    },
    mobileMenu: {
      className: 'header3-mobile-menu',
    },
  },
};
