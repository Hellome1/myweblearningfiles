# React 学习笔记

## 引入

HTML 页面引入

- 方式一：在线引入
  
  ```html
  <!-- React 核心库 -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <!-- 使 React 支持操作 Dom  -->
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


  <!-- 引入 babel 将 jsx 转化为 js -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  ```

- 方式二：npm 安装并在 HTML 页面引入

  `npm install react`

  `npm install react-dom`

  `npm install --save babel-standalone`

  ```html
  <script src="/node_modules/react/umd/react.development.js"></script>
  <script src="/node_modules/react-dom/umd/react-dom.development.js"></script>
  <script src="/node_modules/babel-standalone/babel.js"></script>
  ```

React 脚手架快速创建 React 项目，无需引入

- `npm install create-react-app -g`
- `npx create-react-app myapp`

## Hello React

```jsx
  const text = <h1>Hello React!</h1>;
  const Text1 = function () {
    return (
      <h1>Hello React!</h1>
    );
  }
  ReactDOM.render(<Text1 />, document.getElementById('app'));
```
可以使用 jsx 赋值给一个变量，或者直接用一个大写字母开头的函数返回 jsx 并在函数名两端加上标签也成了 jsx

