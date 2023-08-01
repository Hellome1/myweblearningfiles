import {create, read, update, del} from './utils.js';
import { verifyToken, unAuthorize } from './login.js';

export default (app, uri) => {
  const collectionName = 'menus';
  app.post('/menus/create', async (req, res) => {
    const { Authorization: token } = req.headers;
    create({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.get('/menus/', async (req, res) => {
    const { authorization = '' } = req.headers;
    const token = authorization.split('Bearer ')[1];
    console.log('TOKEN from reqHeaders: ', token);
    verifyToken(token).then(async ({username}) => {
      console.log('username', username)
      const userResJSONStr = await read({
        uri,
        collectionName: 'users',
        option: {
          filter: {
            username
          }
        }
      });
      const userRes = JSON.parse(userResJSONStr)
      console.log(userRes);
      const user = userRes.data.length && userRes.data[0];
      console.log('user', user);
      const roleResJSONStr = await read({
        uri,
        collectionName: 'roles',
        option: {
          filter: {
            id: { $in: user.roles || [] }
          }
        }
      })
      const roleRes = JSON.parse(roleResJSONStr);
      const { data: roles } = roleRes;
      const perms = roles.reduce((prev, cur) => {
        return prev ? [...prev, ...cur.perms] : [...cur.perms];
      }, null)
      console.log('perms-------------', perms);
      const menusOpt = {
        uri,
        collectionName
      };
      if (!perms.includes('*')) {
        menusOpt.option = { 
          filter: { 
            id: {
              $in: perms
            }
          } 
        }
      }
      const resJSONStr = await read(menusOpt);
      res.send(resJSONStr);
    }).catch(err => {
      unAuthorize(res);
    })
  })

  app.post('/menus/update', async (req, res) => {
    update({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.post('/menus/delete', async (req, res) => {
    del({
      req,
      res,
      uri,
      collectionName
    })
  })
}