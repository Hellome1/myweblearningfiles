import React from 'react'
import { Button } from 'antd'
import {logout} from '@/utils/token'
import { useNavigate } from 'react-router-dom'

export default function Fns(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <div {...props}>
      <Button onClick={handleLogout}>退出登录</Button>
    </div>
  )
}
