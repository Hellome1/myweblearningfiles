import React from 'react'
import { Button } from 'antd'
import {logout} from '@/utils/token'
import { useNavigate } from 'react-router-dom'
import { clets } from '@/redux/action/tabs';
import store from '@/redux/store';

export default function Fns(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    store.dispatch(clets());
    navigate('/login');
  }

  return (
    <div {...props}>
      <Button onClick={handleLogout}>退出登录</Button>
    </div>
  )
}