import { ADDROUTES } from "../constants";
import {getMenus} from '@/utils/getMenus';

const res = getMenus();
const { data: menus} = res;

const initState = [
  {
    "id": '0',
    "menuCode": "homePage",
    "menuDesc": "首页",
    "type": "menu",
    "component": "",
    "route": "home",
    "limits": "",
    "icon": "home.svg",
    "menuOrder": "0",
    "creator": "admin"
  }
]
export default function routesReducer(prevState = [...initState, ...menus], action) {
  const { type, data } = action;
  switch (type) {
    case ADDROUTES:
      return [...initState, ...data];
    default:
      return prevState;
  }
}