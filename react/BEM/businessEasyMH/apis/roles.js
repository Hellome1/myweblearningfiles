import { create, read, update, del } from "./utils.js";

export default function(app, uri) {
  const collectionName = 'roles';
  app.post('/roles/create', async (req, res) => {
    create({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.get('/roles/', async (req, res) => {
    read({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.post('/roles/update', async (req, res) => {
    update({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.post('/roles/delete', async (req, res) => {
    del({
      req,
      res,
      uri,
      collectionName
    })
  })
}