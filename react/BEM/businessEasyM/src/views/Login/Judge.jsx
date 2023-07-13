import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';

/* 判断登录状态 */
const Judge = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 组件加载完成
    // 根据token请求菜单
  }, [])
  return (
    <div>
      {isLoading ? <Spin /> : <Navigate to='' />}
    </div>
  )
}

export default connect(
  state => { },
  {}
)(Judge)
