import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content16-wrapper',
    },
    page: {
      className: 'home-page content16',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'สล็อต',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เรามีคาสิโนหลากหลายค่ายไว้ให้บริการ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content16-tabs-wrapper',
    },
    block: {
      className: 'content16-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content16-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content16-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content16-content',
            text: {
              className: 'content16-text',
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
