import { MongoClient } from "mongodb";

/* 新建一个操作类 */
export function Handle(uri) {
  this.client = new MongoClient(uri);
}

Handle.prototype.log = async function(logObj) {
  const { type, result } = logObj;
  console.log('type：', type, 'result：', result);
  this.lastResult = result;
  await this.logs.insertOne(logObj);
}

Handle.prototype.select = function(databaseName, collectionName) {
  const database = this.client.db(databaseName);
  this.coll = database.collection(collectionName);
  this.logs = database.collection('logs');
  return this;
}

/**
 * 
 * @param {object} paramObj
 * @param {string} paramObj.type switch 'create'|'read'|'update'|'delete'
 * @returns 
 */
Handle.prototype.CRUD = async function({type, data, isMany, query, option, filter, newContent}) {
  const coll = this.coll;
  try {
    if (!coll) console.error('请先选择集合！');
    let logInfo = '';
    if (Array.isArray(data)) {
      const result = await coll.insertMany(data);
      logInfo = `成功插入${result.insertedCount}条数据`;
    } else {
      const result = await coll.insertOne(data);
      logInfo = `成功插入一条数据，_id：${result.insertedId}`;
    }
    
    await this.log({ type, result: logInfo });
  } finally {
    await this.client.close();
  }

  return this;
}

Handle.prototype.create = async function(data) {
  const coll = this.coll, type = 'create';
  try {
    if (!coll) console.error('请先选择集合！');
    let logInfo = '';
    if (Array.isArray(data)) {
      const result = await coll.insertMany(data);
      logInfo = `成功插入${result.insertedCount}条数据`;
    } else {
      const result = await coll.insertOne(data);
      logInfo = `成功插入一条数据，_id：${result.insertedId}`;
    }
    
    await this.log({ type, result: logInfo });
  } finally {
    await this.client.close();
  }

  return this;
}

Handle.prototype.read = async function(query = {}, option = {}) {
  const coll = this.coll, type = 'read';
  if (!coll) console.error('请先选择集合！');
  const { isMany } = option;
  let result = '';
  if (isMany) {
    result = await coll.findMany(query, option);
  } else {
    result = await coll.findOne(query, option);
  }

  this.log({ type, result });

  return this;
}

Handle.prototype.update = async function(filter, newContent, option = {}) {
  const coll = this.coll, type = 'update';
  if (!coll) console.error('请先选择集合！');
  if (!filter) console.error('过滤器不能为空！');
  const { isMany } = option;
  const updateDoc = {
    $set: newContent
  };

  let result = null, logInfo = '';
  if (isMany) {
    result = await coll.updateMany(filter, updateDoc);
    logInfo = `更新 ${result.modifiedCount} 个文档`;
  } else {
    result = await coll.updateOne(filter, updateDoc);
    logInfo = `${result.matchedCount} 个文档被匹配, 更新 ${result.modifiedCount} 个文档`;
  }

  this.log({ type, result: logInfo });

  return this;
}

Handle.prototype.delete = async function(filter, option = {}) {
  const coll = this.coll, type = 'delete';
  if (!coll) console.error('请先选择集合！');
  if (!filter) console.error('过滤器不能为空！');
  const {isMany} = option;
  let result = '', logInfo = '';
  if (isMany) {
    result = await coll.deleteMany(filter)
    if (result.deletedCount === 1) {
      logInfo = `成功删除一条数据`;
    } else {
      logInfo = `未匹配到数据，删除 0 条`;
    }
  } else {
    result = await coll.deleteOne(filter)
    logInfo = `删除 ${result.deletedCount} 个文档`;
  }
  
  this.log({ type, result: logInfo });

  return this;
}

Handle.prototype.close = async function() {
  try {
    await this.client.close();
  } catch (err) {
    throw err;
  }
}