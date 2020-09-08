import React from 'react';
import '../../App.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Form, Input, Button, Checkbox } from 'antd';

import { addCategory, deleteCategory, deleteTask } from '../../api';


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
    console.log(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={"Category"}>
      <div className={"addCategory"}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={addCategory}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add Category
        </Button>
          </Form.Item>
        </Form>
      </div>

      <div className={"deleteCategory"}>
        <Form
          {...layout}
          name="basic"
          onFinish={deleteCategory}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Id"
            name="id"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Delete Category
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div>
      <div className={"deleteCategory"}>
        <Form
          {...layout}
          name="basic"
          onFinish={deleteTask}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="TaskId"
            name="TaskId"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Delete Task
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>


  );
};

export default Demo;
