import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './index.scss'

import Logo from './Logo'
import Nav from './Nav'

export default function Index() {

  return (
    <div className='sidebar-root'>
      <Logo />
      <Nav />
    </div>
  )
}