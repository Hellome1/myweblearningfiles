import express from 'express'
import bodyParser from 'body-parser';
import { Handle } from './connect.js';
import config from './config/config.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*'); 
  next();
})

const { uri } = config;

app.get('/create', async (req, res) => {
  const { body } = req;
  console.log(body);
  const hdIns = new Handle(uri);
  await hdIns.select('BEM', 'menus').create(body);
  const result = hdIns.lastResult;
  res.send(result);
})

app.get('/read', async (req, res) => {
  const hdIns = new Handle(uri);
  await hdIns.select('BEM', 'menus').read();
  hdIns.close();
  let result = hdIns.lastResult;
  if (result instanceof Object) result = JSON.stringify(result);
  res.send(result);
})

app.get('/update', async (req, res) => {
  const hdIns = new Handle(uri);
  await hdIns.select('BEM', 'menus').update()
  hdIns.close();
  const result = hdIns.lastResult;
  res.send(result);
})

app.get('/delete', async (req, res) => {
  const hdIns = new Handle(uri);
  await hdIns.select('BEM', 'menus').delete({});
  hdIns.close();
  const result = hdIns.lastResult;
  res.send(result);
})

app.listen(3000, (err) => {
  if (err) throw err;
  else console.log('app listen at 3000.')
})