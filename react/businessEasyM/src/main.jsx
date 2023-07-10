import React from 'react'
import ReactDOM from 'react-dom/client'
import store from '@/redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'

import './index.scss'
import '@/assets/reset.scss'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const render = () => {
  // console.log('render');
  root.render(
    // <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
    // </React.StrictMode>,
  )
}

render()

// store.subscribe(() => {
//   render()
// })