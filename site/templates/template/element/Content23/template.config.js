import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content23-wrapper',
    },
    page: {
      className: 'home-page content23',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'เกมส์ที่แจ๊คพ็อตแตกบ่อย',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เกมส์ที่แจ๊คพ็อตแตกบ่อยประจำเว็บ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content23-tabs-wrapper',
    },
    block: {
      className: 'content23-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content23-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content23-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content23-content',
            text: {
              className: 'content23-text',
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
