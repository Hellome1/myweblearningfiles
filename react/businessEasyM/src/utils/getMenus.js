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
  var option = {
    url: '/datas/menus.json',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }
  return xmlReq(option)
}
