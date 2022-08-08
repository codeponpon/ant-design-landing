import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content19-wrapper',
    },
    page: {
      className: 'home-page content19',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'ค่ายฮอตฮิตประจำเว็บ',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'เกมส์ฮอตฮิตประจำเว็บที่ผู้เล่นให้เล่นบ่อยๆ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content19-tabs-wrapper',
    },
    block: {
      className: 'content19-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content19-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content19-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content19-content',
            text: {
              className: 'content19-text',
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
