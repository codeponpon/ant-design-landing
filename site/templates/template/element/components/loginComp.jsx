/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { message, Input } from 'antd';
import { LoginForm } from '@ant-design/pro-form';
import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import waitTime from '../libs/waitTime';

const LoginComp = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    waitTime(1500);
    setLoading(false);
    message.success('Sign-in Successful!');
  };

  return (
    <LoginForm
      logo=""
      title="เข้าสู่ระบบ"
      subTitle=" "
      submitter={{
        // Configure the button text
        searchConfig: {
          submitText: 'เข้าสู่ระบบ',
        },
        // Configure the properties of the button
        resetButtonProps: {
          style: {
            // Hide the reset button
            display: 'none',
          },
        },
        submitButtonProps: {
          className: 'ant-btn-lg',
          style: { width: '312px' },
        },
      }}
      onFinish={onFinish}
    >
      {' '}
      <Input
        name="mobile"
        size="large"
        prefix={<MobileOutlined className="prefixIcon" />}
        placeholder="เบอร์โทรศัพท์"
        style={{ marginBottom: '24px' }}
        rules={[
          {
            required: true,
            message: 'กรุณากรอกเบอร์โทรศัพท์!',
          },
        ]}
      />
      <Input.Password
        name="password"
        size="large"
        prefix={<LockOutlined className="prefixIcon" />}
        placeholder="รหัสผ่าน"
        style={{ marginBottom: '24px' }}
        rules={[
          {
            required: true,
            message: 'กรุณากรอกรหัสผ่าน!',
          },
        ]}
      />
    </LoginForm>
  );
};

export default LoginComp;
