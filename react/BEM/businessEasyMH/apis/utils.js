import { Handle } from "../connect.js";

export const create = async ({req, res, uri, collectionName}) => {
  /* 不使用body-parser的情况可以使用req.on('data', (chunk) => {})获取请求的body参数 */
    // req.on('data', (data) => {
    //   console.log(data.toString());
    // })
    /* --- --- */
  const { body = {} } = req;
  const hdIns = new Handle(uri);
  const opt = {
    type: 'create',
    data: body
  }
  await hdIns.select('BEM', collectionName).CRUD(opt);
  const result = hdIns.lastResult;
  res.send(result);
}

export const read = async ({req = { query: {} }, res, uri, collectionName, option={}}) => {
  const { query: { id } } = req;
  const hdIns = new Handle(uri);
  const opt = {
    type: 'read'
  }
  if (id) opt.filter = { id };
  else opt.isMany = true;
  mixIn(opt, option);
  console.log('opt', opt)
  await hdIns.select('BEM', collectionName).CRUD(opt);
  let result = hdIns.lastResult;
  if (result instanceof Object) result = JSON.stringify(result);
  if (res) res.send(result);
  return result;
}

export const update = async ({req, res, uri, collectionName}) => {
  const { body: { id, newContent } = {} } = req;
  const hdIns = new Handle(uri);
  const opt = {
    type: 'update',
    filter: {},
    newContent
  }
  if (id) opt.filter = { id }
  else opt.isMany = true;
  await hdIns.select('BEM', collectionName).CRUD(opt)
  const result = hdIns.lastResult;
  res.send(result);
}

export const del = async ({req, res, uri, collectionName}) => {
  const { body: { id } = {} } = req;
  console.log(id);
  const hdIns = new Handle(uri);
  const opt = {
    type: 'delete',
    filter: {}
  }
  if (id) opt.filter = { id }
  else opt.isMany = true;
  await hdIns.select('BEM', collectionName).CRUD(opt);
  const result = hdIns.lastResult;
  res.send(result);
}

export function mixIn(target, source) {
  for (var k in source) {
    target[k] = source[k];
  }
}