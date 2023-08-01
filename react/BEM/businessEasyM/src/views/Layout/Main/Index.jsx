import React, { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import './index.scss'

export default function Index() {
  const [isNewsLoading, setIsNewsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsNewsLoading(false);
    }, 1000);
  }, [])

  return (
    <div id='main-root'>
      <div className="module">
        <div className="module-title">
          <h3>今日新闻</h3>
        </div>
        <div className="module-content"></div>
        {
          isNewsLoading ?
            <Skeleton active /> :
            <span>
              <h4>
                人民银行今日开展440亿元逆回购操作 公开市场实现净投放290亿元
              </h4>
              <p>
                上证报中国证券网讯 人民银行7月25日公告称，为维护月末流动性平稳，人民银行当日以利率招标方式开展了440亿元7天期逆回购操作，中标利率为1.90%。由于今日有150亿元逆回购到期，今日公开市场实现净投放290亿元。

                昨日，短端利率涨跌不一。上海银行间同业拆放利率（Shibor）隔夜上行0.3个基点，报1.534%。7天Shibor下行1.8个基点，报1.808%。从回购利率表现看，DR007加权平均利率下降至1.7684%，低于政策利率水平。上交所1天国债逆回购利率（GC001）上升至1.903%。（陈佳怡）
              </p>
            </span>
        }
      </div>
    </div>
  )
}
