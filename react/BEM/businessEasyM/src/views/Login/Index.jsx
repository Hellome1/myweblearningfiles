import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss'
import { login, setToken } from '@/utils/token';
import { useState } from 'react';

const saveUsr = localStorage.getItem('username');
const savePwd = localStorage.getItem('password');
const initFields = [
  {
    name: ['username'],
    value: saveUsr
  },
  {
    name: ['password'],
    value: savePwd
  }
]

export default () => {
  const navigate = useNavigate();

  const [fields, setField] = useState(initFields)
  console.log(fields)

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const { remember, username, password } = values;
    if (remember) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    login(values).then(res => {
      const { token: TOKEN } = res;
      setToken(TOKEN);
      navigate('/home');
    });
  };
  const onChange = (name) => {
    return (e) => {
      const value = e.target.value;
      const n_field = JSON.parse(JSON.stringify(fields)).map(itm => {
        if (itm.name.includes(name)) itm.value = value;
        return itm
      })
      setField(n_field)
    }
  }

  return (
    <>

      <Form
        id='components-form-demo-normal-login'
        name="normal_login"
        className="login-form"
        fields={fields}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名！',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名" 
            onChange={onChange('username')}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
            onChange={onChange('password')}
          />
        </Form.Item>
        <Form.Item>
          <div className='flex-bt'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot font-s" href="">
              忘记密码？
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <div className="h-gap"></div>
        </Form.Item>
      </Form>
    </>
  );
};
