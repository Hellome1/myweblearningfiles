import server from "./request";
import { getMenus } from "./getMenus";

import store from "@/redux/store";
import { addRoutes } from "@/redux/action/routes";

// token从session取
let TOKEN = sessionStorage.getItem('TOKEN');

// 暴露token给外界的方法
export const getToken = () => {
  return TOKEN;
}

// 设置token - 只有login有权限使用这个方法
export const setToken = (token) => {
  TOKEN = token; // 设置内存的token
  setBaseToken();
  // /* 根据token请求菜单并保存到store中 */
  const res = getMenus();
  const {data: menus} = res;
  store.dispatch(addRoutes(menus));
  // /* --- - --- */
}

// 设置session的token，保证刷新不会丢失，设置token到请求头
export const setBaseToken = () => {
  if (TOKEN) {
    server.defaults.headers.common['Authorization'] = TOKEN;
    sessionStorage.setItem('TOKEN', TOKEN);
  }
}

export const logout = () => {
  TOKEN = '';
  sessionStorage.removeItem('TOKEN');
}

// 获取token的方法
export const login = (userInfo) => {
  return server({
    url: '/login',
    method: 'post',
    data: userInfo,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
