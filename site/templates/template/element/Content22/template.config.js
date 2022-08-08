import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content22-wrapper',
    },
    page: {
      className: 'home-page content22',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'กีฬายอดนิยม',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'กีฬายอดนิยมประจำเว็บที่ผู้เล่นให้เล่นบ่อยๆ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content22-tabs-wrapper',
    },
    block: {
      className: 'content22-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content22-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content22-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content22-content',
            text: {
              className: 'content22-text',
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
