import { MongoClient } from "mongodb";

/* 新建一个操作类 */
export function Handle(uri) {
  this.client = new MongoClient(uri);
}

Handle.prototype.log = async function (logObj) {
  const { type, result } = logObj;
  console.log('type：', type, 'result：', result);
  this.lastResult = result;
  if (type === 'read') logObj.result = '读取数据';
  await this.logs.insertOne(logObj);
}

Handle.prototype.select = function (databaseName, collectionName) {
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
Handle.prototype.CRUD = async function ({ type, data, isMany, query = {}, option = {}, filter, newContent }) {
  const coll = this.coll;
  if (!coll) console.error('请先选择集合！');
  try {
    let logInfo = '', result;
    switch (type) {
      case 'create':
        if (Array.isArray(data)) {
          result = await coll.insertMany(data);
          logInfo = `成功插入${result.insertedCount}条数据`;
        } else {
          result = await coll.insertOne(data);
          logInfo = `成功插入一条数据，_id：${result.insertedId}`;
        }
        break;
      case 'update':
        if (!filter) console.error('过滤器不能为空！');
        const updateDoc = {
          $set: newContent
        };
        if (isMany) {
          result = await coll.updateMany(filter, updateDoc);
          logInfo = `更新 ${result.modifiedCount} 个文档`;
        } else {
          result = await coll.updateOne(filter, updateDoc);
          logInfo = `${result.matchedCount} 个文档被匹配, 更新 ${result.modifiedCount} 个文档`;
        }
        break;
      case 'delete':
        if (!filter) console.error('过滤器不能为空！');
        if (isMany) {
          result = await coll.deleteMany(filter)
          if (result.deletedCount) {
            logInfo = `成功删除${result.deletedCount}条数据`;
          } else {
            logInfo = `未匹配到数据，删除 0 条`;
          }
        } else {
          result = await coll.deleteOne(filter)
          logInfo = `删除 ${result.deletedCount} 个文档`;
        }
        break;
      case 'read':
      default:
        if (isMany) {
          result = '';
          const cursor = coll.find();
          if ((await coll.countDocuments()) === 0) {
            console.log("No documents found!");
          }
          for await (const doc of cursor) {
            result += JSON.stringify(doc);
          }
          logInfo = result;
        } else {
          result = await coll.findOne(query, option);
          logInfo = result;
        }
        break;
    }

    await this.log({ type, result: logInfo });
  } finally {
    await this.client.close();
  }

  return this;
}

Handle.prototype.close = async function () {
  try {
    await this.client.close();
  } catch (err) {
    throw err;
  }
}