import { create, read, update, del } from "./utils.js";

export default function(app, uri) {
  const collectionName = 'users';
  app.post('/users/create', async (req, res) => {
    create({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.get('/users/', async (req, res) => {
    read({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.post('/users/update', async (req, res) => {
    update({
      req,
      res,
      uri,
      collectionName
    })
  })

  app.post('/users/delete', async (req, res) => {
    del({
      req,
      res,
      uri,
      collectionName
    })
  })
}