import { getToken, logout } from "./token";
import { ADDR } from "@/redux/constants";
import getRoutes from '@/route'

function xmlReq(option) {
  const { url, method = 'get', headers = {}, data } = option;
  if (!url) console.error('url 不能为空！');
  var serverResponse;
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, false); //第三个参数是否异步
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
      serverResponse = JSON.parse(xhr.response);
      console.log('获得响应：', serverResponse);
    }
  };
  var body = data && JSON.stringify(data) || null;
  if (body) xhr.send(body);
  else xhr.send();
  return serverResponse;
}

export function getMenus() {
  const TOKEN = getToken();
  console.log('token', 'Bearer ' + TOKEN)
  var option = {
    url: 'http://127.0.0.1:3000/menus/',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + TOKEN
    }
  }
  const res = xmlReq(option)
  if (res.code === 401) {
    logout();
    res.data = [];
    return res;
  }
  operateRes(res);
  return res
}

// 树形化菜单
function operateRes(res) {
  const treeData = [];
  let treeCurLevel = []; // 临时当前树形层
  let remainDataCount = -1; // 剩下的待处理的菜单数据，当数据不变化说明没有可以放置的菜单
  let { data = [] } = res;
  h();
  res.data = treeData;

  function h() {
    while (true) {
      let curLevel = [];
      for (var i = 0; i < data.length; i++) {
        var itm = data[i];
        var parentId = itm.parentId;
        if (!treeData.length) {
          if (parentId === '0') {
            curLevel.push(itm);
            data.splice(i, 1);
            i--;
          }
        } else if (treeCurLevel.length) {
          treeCurLevel.forEach(curLItm => {
            if (curLItm.id === parentId) {
              curLevel.push(itm);
              curLItm.children = curLItm.children ? [...curLItm.children, itm] : [ itm ];
              data.splice(i, 1);
              i--;
            }
          })
        }
      }
      if (remainDataCount === data.length) break;
      else remainDataCount = data.length;
      treeCurLevel = curLevel;
      if (!treeData.length) treeData.push(...treeCurLevel)
    }
  }
}