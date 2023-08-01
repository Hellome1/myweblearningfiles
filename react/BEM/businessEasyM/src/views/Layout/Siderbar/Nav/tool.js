import { useLocation } from "react-router-dom";

export function searchMenuFromKeyValue(kvObj, menus) {
  for (let k in kvObj) {
    let v = kvObj[k];
    let HASRESULT = false;
    let arr = [];
    for (let i = 0; i < menus.length; i++) {
      let rootObj = {
        ind: 0,
        value: menus[i]
      }
      arr = [rootObj];
      let isFounded = search();
      if (isFounded) {
        HASRESULT = true;
        break;
      }
    }
    return HASRESULT && arr.map(itm => itm.value);

    function search() {
      let curObj = arr.length && arr[arr.length - 1],
        objInd = curObj.ind,
        cur = curObj.value;
      if (!cur) {
        console.warn('没有当前节点！');
        return false;
      }
      if (cur[k] === v) return true;
      let children = cur.children;
      // 没有children说明已经找到一条分支的最低端了
      if (!children || !children.length) {
        // 回退到上一个有分支的节点
        return backToBranchNode();
      }
      // 进入下一层
      cur = children[objInd];
      
      let o = {
        ind: 0,
        value: cur
      };
      o.value = cur;
      /* // 操纵arr的长度可操作遍历的深度 */
      arr.push(o);
      return search();

      function backToBranchNode() {
        let last_menuIndex_hasChildren = -1;
        arr.forEach((itm, index) => {
          let value = itm.value;
          if (value.children && value.children.length && itm.ind != itm.value.children.length) {
            last_menuIndex_hasChildren = index;
            itm.ind++;
          }
        });
        // 截断最后没有children的菜单
        if (last_menuIndex_hasChildren != -1) {
          arr = arr.filter((itm, index) => index <= last_menuIndex_hasChildren);
          return search();
        } else {
          return false;
        }
      }
    }
  }
}

function menuKeysManager() {
  let clickedOpenKeys = null;
  let openKeys = [];

  function setClickedOpenKeys(keys) {
    clickedOpenKeys = keys;
  }

  function getMenuKeys(menus) {
    let selectedKeys = [];
    const location = useLocation();
    let { pathname } = location;
    pathname = pathname.replace('/', '');
    const menuBranch = searchMenuFromKeyValue(
      {route: pathname},
      menus
    );
    if (menuBranch) {
      selectedKeys = [menuBranch[menuBranch.length - 1].id];
      let bef_openkeys = menuBranch.filter((m, index) => index != menuBranch.length - 1).map(m => m.id);
      if (bef_openkeys.length) openKeys = bef_openkeys;
    }
    if (clickedOpenKeys) openKeys = clickedOpenKeys;
    return {
      selectedKeys,
      openKeys,
      menuBranch
    };
  }

  return {
    getMenuKeys,
    setClickedOpenKeys
  }
}
export const mkM = menuKeysManager();