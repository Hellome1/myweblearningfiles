import { Handle } from '../connect.js';

export default (app, uri) => {
  app.post('/menus/create', async (req, res) => {
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
    await hdIns.select('BEM', 'menus').CRUD(opt);
    const result = hdIns.lastResult;
    res.send(result);
  })

  app.get('/menus/', async (req, res) => {
    const { query: { id } } = req;
    const hdIns = new Handle(uri);
    const opt = {
      type: 'read'
    }
    console.log(req.query);
    if (id) opt.filter = { id }
    else opt.isMany = true;
    await hdIns.select('BEM', 'menus').CRUD(opt);
    let result = hdIns.lastResult;
    if (result instanceof Object) result = JSON.stringify(result);
    res.send(result);
  })

  app.post('/menus/update', async (req, res) => {
    const { body: { id, newContent } = {} } = req;
    const hdIns = new Handle(uri);
    const opt = {
      type: 'update',
      filter: {},
      newContent
    }
    if (id) opt.filter = { id }
    else opt.isMany = true;
    await hdIns.select('BEM', 'menus').CRUD(opt)
    const result = hdIns.lastResult;
    res.send(result);
  })

  app.post('/menus/delete', async (req, res) => {
    const { body: { id } = {} } = req;
    console.log(id);
    const hdIns = new Handle(uri);
    const opt = {
      type: 'delete',
      filter: {}
    }
    if (id) opt.filter = { id }
    else opt.isMany = true;
    await hdIns.select('BEM', 'menus').CRUD(opt);
    const result = hdIns.lastResult;
    res.send(result);
  })
}