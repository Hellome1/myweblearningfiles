import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addRoutes } from '@/redux/action/routes'
import { Space, Spin } from 'antd'

function middle(props) {

  return (
    <div style={{width: '50px', height: '50px'}}>
      <Space>
        {false ? <h1>Hello</h1> : <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>}
      </Space>
    </div>
  )
}

export default connect(
  state => ({}),
  { addRoutes }
)(middle)