import React from 'react';
import TweenOne from 'rc-tween-one';
import { Link } from 'rc-scroll-anim';
/* replace-start */
import { polyfill } from 'react-lifecycles-compat';
import './index.less';
/* replace-end */
import { DrawerForm } from '@ant-design/pro-form';
import { message } from 'antd';

class Header extends React.Component {
  formRef = React.createRef();

  /* replace-start */
  static getDerivedStateFromProps(props, { prevProps }) {
    const { func } = props;
    const nextState = {
      prevProps: props,
    };
    if (prevProps && props !== prevProps && func) {
      nextState.phoneOpen = func.open;
    }
    return nextState;
  }

  /* replace-end */
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  waitTime = (time = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;

    const { phoneOpen } = this.state;
    const { LinkMenu } = dataSource;
    const navData = LinkMenu.children;
    const navChildren = Object.keys(navData).map((key, i) => {
      const { drawer, disabled, ...item } = navData[key];
      let tag = Link;
      let tagProps = {
        /* replace-start */
        'data-edit': 'LinkMenu',
        /* replace-end */
      };
      if (item.to && item.to.match(/\//g)) {
        tagProps.href = item.to;
        tag = 'a';
        delete item.to;
      }
      if (drawer) {
        tag = DrawerForm;
        tagProps = {
          width: isMobile ? '100%' : '400px',
          title: 'Main Title',
          formRef: this.formRef,
          trigger: <Link to={item.to}>{navData[key].children}</Link>,
          drawerProps: { forceRender: true, destroyOnClose: true },
          onFinish: async (values) => {
            await this.waitTime(2000);
            console.log(values.name);
            message.success('Submitted successfully');
            // do not close the popup
            return true;
          },
        };
        return (
          <div {...item} key={i.toString()}>
            <DrawerForm {...tagProps}>
              <DrawerForm
                title="Sub Title"
                formRef={this.formRef}
                trigger={<Link>Sub Content</Link>}
                drawerProps={{
                  forceRender: true,
                  destroyOnClose: true,
                }}
                onFinish={async (values) => {
                  await this.waitTime(2000);
                  console.log(values.name);
                  message.success('Submitted successfully');
                  // do not close the popup
                  return true;
                }}
                width={isMobile ? '100%' : '400px'}
              />
            </DrawerForm>
          </div>
        );
      }

      return React.createElement(
        tag,
        { ...item, ...tagProps, key: i.toString() },
        /* replace-start-value = navData[key].children */
        React.createElement('span', { dangerouslySetInnerHTML: { __html: navData[key].children } }),
        /* replace-end-value */
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} {...dataSource.logo}>
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
              /* replace-start */
              data-edit="LinkMenu"
              /* replace-end */
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...LinkMenu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
            /* replace-start */
            data-edit="LinkMenu"
            /* replace-end */
          >
            {navChildren}
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

/* replace-start-value = export default Header */
export default polyfill(Header);
/* replace-end-value */
