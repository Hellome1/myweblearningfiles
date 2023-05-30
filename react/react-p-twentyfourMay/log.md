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

react17
```jsx
const text = <h1>Hello React!</h1>;
const Text1 = function () {
  return (
    <h1>Hello React!</h1>
  );
}
ReactDOM.render(<Text1 />, document.getElementById('app'));
```
可以使用 jsx 赋值给一个变量，或者直接用一个大写字母开头的函数返回 jsx 并在函数名两端加上标签该函数就成了组件

react18
```jsx
function MyApp() {
  return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
```

### jsx循环
```jsx
const arr = ['angular', 'vue', 'react'];

const List = () => {
  console.log(this); // undefined
  return (
    <div>
        框架：
        <ul>
            { 
                arr.map(itm => <li key={itm}>{itm}</li>)
            }
        </ul>
    </div>
  )
}
ReactDOM.render(<List />, document.getElementById('app'));
```
组件里 this 指向 undefined 因为 babel 翻译的过程使用了严格模式防止自定义的函数指向 window

### 组件化

模块是js文件的拆分

组件是实现某一部分的业务逻辑的 html，css，js，资源文件的拆分，例如：header，sidebar

* 两种组件定义方式
  ```jsx
  // 无状态组件
  const List = () => (<h1>Hello</h1>)
  ```

  ```jsx
  class List extends React.Component {
    render() {
      return (<h1>Hello</h1>)
    }
  }
  ```

### dom 事件改变 state 属性写法
```jsx
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: '热'
        };
        // 这里实例赋值一个强制绑定了 this 的方法
        this.change = this.change.bind(this);
    }
    change() {
        // 该方法不是直接实例调用，而是 dom 调用，又 babel 类方法默认开启严格模式，this 如果不处理默认为 undefind
        // react 状态不能直接更改，需要借助内置 api
        this.setState({
            weather: this.state.weather === '冷' ? '热' : '冷'
        })
    }
    render() {
        const { weather } = this.state;
        return (
            <div>
                <h1 onClick={this.change}>今天天气{weather}</h1>
            </div>
        )
    }
}
ReactDOM.render(<Weather />, document.getElementById('app'));
```

### props
* 函数式组件及其类型限制和默认属性
  ```jsx
  function Person (props) {
        return (
            <ul>
                <li>姓名：{props.name}</li>
                <li>年龄：{props.age + 1}</li>
                <li>性别：{props.sex}</li>
            </ul>
        )
    }

  Person.propTypes = {
    name: PropTypes.string.isRequired,
    speak: PropTypes.func
  }
  Person.defaultProps = {
    age: 18,
    sex: '男'
  }
  const data = { name: 1, age: 18, sex: '男'}
  ReactDOM.render(<Person {...data}/>, document.getElementById('app'));
  // ReactDOM.render(<Person name={data.name} age={data.age} sex={data.sex}/>, document.getElementById('app')); // ... 语法是这种形式的简写，由 react + babel 提供支持
  ```
  类型的限制在 React15及之前可通过
  ```js
  Person.propTypes = {
    name: React.PropTypes.string.isRequired,
    speak: React.PropTypes.func
  }
  ```
  React15 以后 PropTypes 属性脱离，需要引入 `prop-types`

* 类式组件及其类型限制和默认属性
  ```jsx
  class Person extends React.Component {
        static propTypes = {
          name: PropTypes.string.isRequired,
          speak: PropTypes.func
        }
        static defaultProps = {
          age: 18,
          sex: '男'
        }
        
        render() {
            return (
                <ul>
                    <li>姓名：{this.props.name}</li>
                    <li>年龄：{this.props.age + 1}</li>
                    <li>性别：{this.props.sex}</li>
                </ul>
            )
        }
    }
    const data = { name: 't', age: 18, sex: '男'}
    ReactDOM.render(<Person {...data}/>, document.getElementById('app'));
  ```
  static 关键字会把属性加到构造函数上即 Person