import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    isScrollLink: true,
    wrapper: {
      className: 'header2 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header2-logo',
      children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    LinkMenu: {
      className: 'header2-menu',
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
      className: 'header2-mobile-menu',
    },
  },
};
