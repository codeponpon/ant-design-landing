import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content20-wrapper',
    },
    page: {
      className: 'home-page content20',
    },
    OverPack: {},
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'คาสิโนฮิตประจำเว็บ',
          className: 'title-h1',
        },
        {
          name: 'content',
          children: 'คาสิโนฮอตฮิตประจำเว็บที่ผู้เล่นให้เล่นบ่อยๆ',
        },
      ],
    },
    tabsWrapper: {
      className: 'content20-tabs-wrapper',
    },
    block: {
      className: 'content20-img-wrapper',
      children: [
        {
          name: 'block0',
          tag: {
            className: 'content20-tag',
            text: {
              children: 'ผู้ให้บริการ',
              className: 'content20-tag-name',
            },
            icon: { children: 'appstore' },
          },
          content: {
            className: 'content20-content',
            text: {
              className: 'content20-text',
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
