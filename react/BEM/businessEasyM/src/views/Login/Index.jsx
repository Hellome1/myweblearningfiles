import { NavLink, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss'
import { login, setToken } from '@/utils/token';

const App = (props) => {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    login(values).then(res => {
      const { TOKEN } = res;
      setToken(TOKEN);
      navigate('/home');
    });
  };
  return (
    <Form
      id='components-form-demo-normal-login'
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名！',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="密码"
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
        <NavLink to="/register" className={'break'}>立马注册！</NavLink>
        {props.count}
      </Form.Item>
    </Form>
  );
};
export default connect(state => ({}), {}
)(App);