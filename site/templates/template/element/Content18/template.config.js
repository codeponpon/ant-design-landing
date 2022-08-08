import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content18-wrapper',
    },
    page: {
      className: 'home-page content18',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'ยิงปลา',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เรามีเกมส์ยิงปลาจากหลายค่ายไว้คอยบริการแล้ววันนี้',
        },
      ],
    },
    tabsWrapper: {
      className: 'content18-tabs-wrapper',
    },
    block: {
      className: 'content18-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content18-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content18-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content18-content',
            text: {
              className: 'content18-text',
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
