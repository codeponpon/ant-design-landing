/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Link } from 'rc-scroll-anim';
import waitTime from '../libs/waitTime';

export const AccountComp = (props) => {
  const { user, balance, loadingWallet, CheckBalance } = props;
  const [logoutLoading, setLogoutLoading] = useState(false);
  const signOut = async () => {
    setLogoutLoading(true);
    localStorage.clear();
    await waitTime(1000);
    window.location.reload();
    setLogoutLoading(false);
  };

  return (
    <>
      <div className="ant-pro-form-login-top">
        <div className="ant-pro-form-login-header">
          <span className="ant-pro-form-login-title">
            {loadingWallet ? <LoadingOutlined /> : balance} ฿
          </span>
        </div>
        <div className="ant-pro-form-login-desc">
          <Space>
            จำนวนเครดิต{' '}
            <Link href="#" onClick={() => CheckBalance()}>
              {' '}
              <Button
                type="primary"
                shape="circle"
                icon={<ReloadOutlined />}
                size="lg"
                loading={loadingWallet}
              />{' '}
            </Link>
          </Space>
        </div>
      </div>
      <Button
        type="primary"
        className="ant-btn-lg"
        block
        onClick={() => signOut()}
        loading={logoutLoading}
      >
        ออกจากระบบ
      </Button>
    </>
  );
};
