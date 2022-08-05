import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content15-wrapper',
    },
    page: {
      className: 'home-page content15',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'คาสิโน',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เรามีคาสิโนหลากหลายค่ายไว้ให้บริการ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content15-tabs-wrapper',
    },
    block: {
      className: 'content15-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content15-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content15-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content15-content',
            text: {
              className: 'content15-text',
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
