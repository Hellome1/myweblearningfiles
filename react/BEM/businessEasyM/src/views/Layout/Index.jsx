import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './index.scss'
import Sidebar from './Siderbar'
import Header from './Header'

export default function Index() {
  return (
    <div id='layout'>
      <Sidebar />
      <Header />
      <div className="second-router-display-area">
        <Outlet />
      </div>
    </div>
  )
}