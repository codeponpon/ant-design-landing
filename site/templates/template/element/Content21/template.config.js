import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content21-wrapper',
    },
    page: {
      className: 'home-page content21',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'สล็อตยอดนิยม',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'สล็อตยอดนิยมประจำเว็บที่ผู้เล่นให้เล่นบ่อยๆ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content21-tabs-wrapper',
    },
    block: {
      className: 'content21-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content21-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content21-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content21-content',
            text: {
              className: 'content21-text',
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
