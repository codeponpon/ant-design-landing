import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content25-wrapper',
    },
    page: {
      className: 'home-page content25',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'หวย',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'หวยเจ้าใหญ่ จ่ายเต็ม',
        },
      ],
    },
    tabsWrapper: {
      className: 'content25-tabs-wrapper',
    },
    block: {
      className: 'content25-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content25-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content25-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content25-content',
            text: {
              className: 'content25-text',
              md: 24,
              xs: 24,
              children: '',
            },
          },
        },
      ],
    },
  },
};
