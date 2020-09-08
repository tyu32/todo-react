import React from 'react';
import '../../App.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Form, Input, Button, Checkbox } from 'antd';

import { addCategory } from '../../api';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = values => {
    values.preventDefault();
    addCategory(values)
    // console.log('Success:', values);
    // fetch("/Category", {
    //   method: "POST",
    //   body: {"title": values},
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })
    // .then((res) => {
    //   console.log(res);
    //   return res.json();
    // })
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((err) => {
    //   console.log(err.message || "wrong when add category");
    // })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item> */}

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
