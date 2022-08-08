import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content17-wrapper',
    },
    page: {
      className: 'home-page content17',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'กีฬา',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เรามีกีฬาหลากหลายประเภทไว้คอยบริการ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content17-tabs-wrapper',
    },
    block: {
      className: 'content17-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content17-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content17-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content17-content',
            text: {
              className: 'content17-text',
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
