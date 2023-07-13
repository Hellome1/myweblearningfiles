import { Modal } from 'antd';
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App = (props) => {

  const { open, confirmLoading, handleOk, handleCancel, modalText } = props;

  const [form, setForm] = useForm();

  return (
    <>
      <Modal
        title="新增菜单"
        open={open}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              handleOk(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        okText="确认"
        cancelText="取消"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="菜单名称"
            name="menuDesc"
            rules={[
              {
                required: true,
                message: '请输入菜单名称！',
              }
            ]}
          >
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};
export default App;