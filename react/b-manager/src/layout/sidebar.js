import { Component } from 'react'
import './sidebar.css'

class Sidebar extends Component {

  state = {
    menuList: [
      {
        route: './system/menuManage',
        desc: '菜单管理',
        code: 'menuManage',
        component: 'menuManage'
      },
      {
        route: './system/roleManage',
        desc: '角色管理',
        code: 'roleManage',
        component: 'roleManage'
      },
    ]
  }

  render() {
    console.log(staticData);
    const { menuList } = this.state;
    console.log(menuList)
    return (
      <div id="sidebar">
        <ul>
          {menuList.map(menuItm => <li key={menuItm.code} className="menuItem">{menuItm.desc}</li>)}
        </ul>
      </div>
    )
  }
}

export default Sidebar