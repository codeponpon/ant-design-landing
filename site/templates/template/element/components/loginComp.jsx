/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, message, Space, Drawer, Input, Button } from 'antd';
import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { Link } from 'rc-scroll-anim';
import RegisterComp from './registerComp';
import waitTime from '../libs/waitTime';

const LoginComp = (props) => {
  const { isMobile, registerHistory = false, ...attrs } = props;
  const [loading, setLoading] = useState(false);
  const [registerChildrenDrawer, setRegisterChildrenDrawer] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    waitTime(1500);
    setLoading(false);
    message.success('Sign-in Successful!');
  };

  return (
    <Form initialValues={{ remember: true }} onFinish={onFinish}>
      <div className="ant-pro-form-login-top" style={{ marginBottom: '20px' }}>
        <div className="ant-pro-form-login-header">
          <span className="ant-pro-form-login-title">เข้าสู่ระบบ</span>
        </div>
      </div>
      <Form.Item
        name="mobile"
        rules={[
          {
            required: true,
            message: 'กรุณากรอกเบอร์โทรศัพท์!',
          },
        ]}
        style={{ marginBottom: '24px' }}
      >
        <Input
          size="large"
          prefix={<MobileOutlined className="prefixIcon" />}
          placeholder="เบอร์โทรศัพท์"
        />
      </Form.Item>
      <Form.Item
        name="password"
        style={{ marginBottom: '24px' }}
        rules={[
          {
            required: true,
            message: 'กรุณากรอกรหัสผ่าน!',
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined className="prefixIcon" />}
          placeholder="รหัสผ่าน"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" size="large" block>
          เข้าสู่ระบบ
        </Button>{' '}
        {!registerHistory && (
          <Space style={{ marginTop: '20px' }}>
            ยังไม่ได้เป็นสมาชิก?{' '}
            <Link onClick={() => setRegisterChildrenDrawer(true)}>สมัครสมาชิก</Link>
            <Drawer
              title="สมัครสมาชิก"
              width={isMobile ? '100%' : '400px'}
              onClose={() => setRegisterChildrenDrawer(false)}
              visible={registerChildrenDrawer}
              {...attrs}
            >
              <RegisterComp loginHistory />
            </Drawer>
          </Space>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginComp;
