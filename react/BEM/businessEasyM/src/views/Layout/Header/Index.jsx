import React, { useState } from 'react'
import './index.scss'
import Fns from './components/Fns'
import Tabs from './components/Tabs';

export default function Index() {
  const [src, setSrc] = useState('/img/default.jpg');
  const [fnsStyleO, setFnsStyleO] = useState({display: 'none'})

  const fakesTabs = [
    {
      desc: '标签1'
    }
  ]

  /* 处理鼠标移入头像事件 */
  const handleMouseEnterAvatar = () => {
    setFnsStyleO({display: 'block'});
  }

  /* 处理鼠标移出头像事件 */
  const handleMouseLeaveAvatar = () => {
    setFnsStyleO({display: 'none'});
  }

  return (
    <div className="header-wrapper">
      <div className='header'>
        <div className="header-inner">
          <div className="user-info">
            {/* 标语 */}
            <span className='slogan'>
              欢迎您，
              <span className="name">Tom</span>
            </span>
            <div className="avatar-group" 
              onMouseLeave={handleMouseLeaveAvatar}
            >
              {/* 头像 */}
              <div
                className="img-cliper"
                onMouseEnter={handleMouseEnterAvatar}
              >
                <img src={src} alt="头像" />
              </div>
              <div className="avatar-fns-container">
                <Fns style={fnsStyleO} className='avatar-fns' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-remain-area">
        <Tabs data={fakesTabs}/>
      </div>
    </div>
  )
}
