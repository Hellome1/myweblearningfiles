## 学习笔记

## 开始

`npm create vite`

## 为什么使用 vite？

当代码很大的时候，项目启动往往需要几分钟时间，即使使用热更新技术HMR，文件修改后也需要几秒钟时间页面才能展现

而 vite 速度快，得益于浏览器原生支持 es 模块：

* 项目开启快：
  * 依赖：esbuild 预购建依赖，esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍
  * 源码：以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
* 更新快：只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。
Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

解释：
* es 模块 - ECMAScript 模块，ECMA 组织 2015 年推出，一种代码重用的机制，思想在编译时就确定依赖。此前没有代码重用的标准机制，所以大家开发了各种模块化标准例如 AMD (async module defination，代表 RequireJS，依赖先引入), UMD (universal module defination，浏览器和服务器通用的模块化标准，判断 exports 是否存在和 define 是否存在), CommomJS (nodejs 采用), CMD (采用就近引入原则)

## 配置

### vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // antd5 之前的按需引入配置，antd5 支持按需引入
    // createStyleImportPlugin({
    //   resolves: [AntdResolve()]
    // })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 更改主题在这里
          'primary-color': 'orange',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
```

可以设置别名从'src'下的绝对路径引入文件

全局声明 .less 文件 `@primary-color` 等变量

### jsconfig.json

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"]
        }
    },
    "exclude": ["node_modules", "dist"]
}
```

* 可以设置输入'@'后面的路径提示

### antd 主题颜色修改

antd 版本 5.6.0
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{token: {colorPrimary: 'green'}}}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)

```

### vscode 设置

* 保存格式化文档：vscode 设置 Format On Save

* 设置建立文件的默认空格数：Tab Size 2