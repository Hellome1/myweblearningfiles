import React from 'react'
import './index.scss'

export default function Index() {
  return (
    <div id='sidebar-logo-root'>
      <img src="/icon.svg" alt="logo" className='logo-img' />
      <span style={{color: 'white', fontWeight: 'bolder'}}>易企通管理系统</span>
    </div>
  )
}
