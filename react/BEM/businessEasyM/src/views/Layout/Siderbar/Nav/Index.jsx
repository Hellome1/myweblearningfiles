import { connect } from 'react-redux';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTabs } from '@/redux/action/tabs';
import {searchMenuFromKeyValue, mkM} from './tool';

function getItem(label, key, icon, children, type, route) {
  return {
    key,
    icon,
    children,
    label,
    type,
    route
  };
}

function Icon(props) {
  return <img style={{ width: '25px', height: '25px', color: 'white' }} src={`/icons/svg/${props.icon}`} />
}

let initKeysObj = {
  selectedKeys: '0',
  openKeys: ''
};
let pathname = location.pathname;
function getMenus(m, parItm) {
  return m && m.length && m.map(itm => {
    const { menuDesc, id, icon, children, route } = itm;
    if (pathname.substring(1) === route) {
      initKeysObj.selectedKeys = id + '';
      initKeysObj.openKeys = parItm && parItm.id + '' || '';
    }
    return getItem(menuDesc, id + '', <Icon icon={icon} />, getMenus(children, itm), '', route);
  })
}

const App = (props) => {
  const {menus} = props;
  const t_items = getMenus(menus);
  const [collapsed, setCollapsed] = useState(false);
  const {getMenuKeys, setClickedOpenKeys} = mkM;
  const menuKeys = getMenuKeys(menus);
  const {selectedKeys, openKeys, menuBranch} = menuKeys;
  const navigate = useNavigate();

  const addTab = (curMenu) => {
    const { route: clickedRoute, menuDesc } = curMenu;
    const navRoute = clickedRoute || '/home';
    if (navRoute != 'home' && navRoute != '/home') {
      props.addTabs({
        desc: menuDesc,
        route: clickedRoute
      })
    }
  }

  useEffect(() => {
    const curMenu = menuBranch && menuBranch[menuBranch.length - 1] || {}
    addTab(curMenu);
  }, [])

  const handleClick = (itm) => {
    const {keyPath} = itm;
    if (Array.isArray(itm)) {
      setClickedOpenKeys(itm);
      const {pathname} = location;
      navigate(pathname);
      return;
    }
    const menuBranch = searchMenuFromKeyValue({id: keyPath[0]}, menus);
    const clickedMenu = menuBranch && menuBranch[menuBranch.length - 1];
    const curMenu = clickedMenu || {}
    const { route: clickedRoute } = curMenu;
    const navRoute = clickedRoute || '/home';
    if (navRoute != 'home' && navRoute != '/home') {
      setClickedOpenKeys(null);
    }
    navigate(navRoute);
    addTab(curMenu);
  }

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={t_items}
        onClick={handleClick}
        onOpenChange={handleClick}
      />
    </div>
  );
};

export default connect(
  (state) => ({ menus: state.extraRoutes }),
  { 
    addTabs
  }
)(App);