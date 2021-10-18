/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Link } from 'rc-scroll-anim';
/* replace-start */
// import { polyfill } from 'react-lifecycles-compat';
import './index.less';
/* replace-end */
import { Drawer } from 'antd';
import { LoadingOutlined, SettingOutlined } from '@ant-design/icons';
import LoginComp from '../components/loginComp';
import RegisterComp from '../components/registerComp';
import { AccountComp } from '../components/accountComp';
import { getCredit } from '../libs/credit';

const Header = (attrs) => {
  const { user, balance, loading, loadingWallet, CheckBalance } = getCredit();
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [accountVisible, setAccountVisible] = useState(false);
  const { dataSource, isMobile, ...props } = attrs;
  const { LinkMenu } = dataSource;
  const navData = LinkMenu.children;
  const navChildren = Object.keys(navData).map((key, i) => {
    const { drawer, ...item } = navData[key];
    let tag = Link;
    let menu = Link;
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
      if (item.to === 'login') {
        if (!loading && user) {
          return (
            <span {...item} key={i.toString()}>
              Credit: {loadingWallet ? <LoadingOutlined /> : balance} ฿
            </span>
          );
        }
        menu = React.createElement(
          Link,
          { onClick: () => setLoginVisible(true) },
          navData[key].children,
        );
        tag = <LoginComp isMobile={isMobile} />;
        tagProps = {
          title: 'สมาชิกเข้าสู่ระบบ',
          visible: loginVisible,
          onClose: () => setLoginVisible(false),
        };
      } else if (item.to === 'register') {
        if (!loading && user) {
          menu = (
            <a href="#" onClick={() => setAccountVisible(true)}>
              <SettingOutlined />
            </a>
          );
          tag = (
            <AccountComp
              user={user}
              balance={balance}
              loading={loading}
              loadingWallet={loadingWallet}
              CheckBalance={CheckBalance}
            />
          );
          tagProps = {
            title: 'ข้อมูลบัญชี',
            visible: accountVisible,
            onClose: () => setAccountVisible(false),
          };
        } else {
          menu = React.createElement(
            Link,
            { onClick: () => setRegisterVisible(true) },
            navData[key].children,
          );
          tag = <RegisterComp isMobile={isMobile} />;
          tagProps = {
            title: 'สมัครสมาชิก',
            visible: registerVisible,
            onClose: () => setRegisterVisible(false),
          };
        }
      }
      return React.createElement(
        'div',
        { className: item.className, name: item.name, dataEdit: 'LinkMenu', key: i.toString() },
        <>
          {menu}
          <Drawer width={isMobile ? '100%' : '400px'} {...tagProps}>
            {tag}
          </Drawer>
        </>,
      );
    }

    if (drawer) return;

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
            onClick={() => setPhoneOpen(!phoneOpen)}
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
                    if (phoneOpen) {
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
};

/* replace-start-value = export default Header */
export default Header;
/* replace-end-value */
