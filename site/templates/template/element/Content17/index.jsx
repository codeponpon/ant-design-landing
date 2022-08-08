import React from 'react';
import { Tabs, Row } from 'antd';
import { Icon } from '@ant-design/compatible';
/* replace-start-value = import { getChildrenToRender } from './utils'; */
import { polyfill } from 'react-lifecycles-compat';
import { getChildrenToRender } from '../../utils';
/* replace-end-value */
/* replace-start */
import './index.less';
/* replace-end */
import GamblingCategory from '../components/GamblingCategory';

const TabPane = Tabs.TabPane;

class Content17 extends React.Component {
  /* replace-start */
  static getDerivedStateFromProps(props, { prevProps, current: prevCurrent }) {
    const { func } = props;
    const nextState = {
      prevProps: props,
    };
    if (prevProps && props !== prevProps) {
      const childLen = props.dataSource.block.children.length;
      if (func) {
        const current = func.currentPage > childLen ? childLen : func.currentPage;
        nextState.current = current;
      } else if (prevCurrent > childLen) {
        nextState.current = childLen;
      }
    }
    return nextState;
  }
  /* replace-end */

  constructor(props) {
    super(props);
    this.state = {
      /* replace-start-value = current: 1 */
      current: props.func ? props.func.currentPage : 1,
      /* replace-end-value */
    };
  }

  onChange = (key) => {
    this.setState({ current: parseFloat(key) });
  };

  getBlockChildren = (item, i) => {
    const { tag, content } = item;
    // const { text } = content;
    // const textChildren = text.children;
    const { icon } = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;
    return (
      <TabPane
        key={i + 1}
        tab={
          <div
            className={tag.className}
            /* replace-start */
            {...tag}
            /* replace-end */
          >
            <Icon
              type={iconChildren}
              className={icon.className}
              /* replace-start */
              {...icon}
              data-edit="icon"
              children="" // eslint-disable-line
              /* replace-end */
            />
            <div {...tagText}>
              {
                /* replace-start-value = tagText.children */
                React.createElement('span', {
                  dangerouslySetInnerHTML: { __html: tagText.children },
                })
                /* replace-end-value */
              }
            </div>
          </div>
        }
        className={item.className}
        /* replace-start */
        {...item}
        /* replace-end */
      >
        {this.state.current === i + 1 && (
          <Row
            key="content"
            {...content}
            /* replace-start */
            data-edit="Row"
            /* replace-end */
          >
            <GamblingCategory name="กีฬา" block="content17" columns={4} />
          </Row>
        )}
      </TabPane>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div
            {...dataSource.titleWrapper}
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
          >
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>

          <Tabs
            key="tabs"
            onChange={this.onChange}
            activeKey={`${this.state.current}`}
            {...dataSource.block}
          >
            {tabsChildren}
          </Tabs>
        </div>
      </div>
    );
  }
}

/* replace-start-value = export default Content17 */
export default polyfill(Content17);
/* replace-end-value */
