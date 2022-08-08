import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content24-wrapper',
    },
    page: {
      className: 'home-page content24',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'เกมส์ยอดนิยม',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เกมส์ยอดนิยมประจำเว็บ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content24-tabs-wrapper',
    },
    block: {
      className: 'content24-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content24-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content24-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content24-content',
            text: {
              className: 'content24-text',
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
