import React from 'react';
import '../../App.css';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Form, Input, Button, Checkbox } from 'antd';

import { 
  addCategory, 
  deleteCategory, 
  deleteTask, 
  addTask, 
  updateTask 
} from '../../api';


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
      <div className={"deleteTask"}>
        <Form
          {...layout}
          name="basic"
          onFinish={deleteTask}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Task Id"
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

      <div className={"AddTask"}>
        <Form
          {...layout}
          name="basic"
          onFinish={addTask}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Task Title"
            name="title"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Task Note"
            name="note"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category Id"
            name="cId"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={"updateTask"}>
        <Form
          {...layout}
          name="basic"
          onFinish={updateTask}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Task Id"
            name="TaskId"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Update Task
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default Demo;
