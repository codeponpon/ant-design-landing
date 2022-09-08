import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

const getBlock = (data) => ({
  name: data.name,
  className: 'block',
  md: 6,
  xs: 24,
  children: {
    wrapper: {
      className: 'content14-block-content',
    },
    img: {
      children: data.img,
    },
    content: {
      children: data.content,
    },
  },
});

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content14-wrapper',
    },
    page: {
      className: 'home-page content14',
    },
    OverPack: {
      playScale: 0.3,
      className: '',
    },
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'title',
          children: 'ผู้ให้บริการเยอะที่สุด',
          className: 'title-h1',
        },
        {
          name: 'content',
          className: 'title-content',
          children:
            'เรารวบรวมผู้ให้บริการชั้นนำทั่วทุกมุมโลกมาไว้ให้ที่นี่แล้ว ไม่ว่าจะเป็นคาสิโน, สล๊อต, บาคาร่า, ยิงปลา, กีฬา และอื่นๆ อีกมากมาย',
        },
      ],
    },
    block: {
      className: 'content14-img-wrapper',
      gutter: 16,
      children: [
        getBlock({
          name: 'block0',
          img: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content: 'Ant Design',
        }),
        getBlock({
          name: 'block1',
          img: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          content: 'Ant Motion',
        }),
        getBlock({
          name: 'block2',
          img: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content: 'Ant Design',
        }),
        getBlock({
          name: 'block3',
          img: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          content: 'Ant Motion',
        }),
        getBlock({
          name: 'block4',
          img: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content: 'Ant Design',
        }),
        getBlock({
          name: 'block5',
          img: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          content: 'Ant Motion',
        }),
        getBlock({
          name: 'block6',
          img: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content: 'Ant Design',
        }),
        getBlock({
          name: 'block7',
          img: 'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          content: 'Ant Motion',
        }),
      ],
    },
  },
};