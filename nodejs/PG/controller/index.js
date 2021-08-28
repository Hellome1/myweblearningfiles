// 导入模型
const {
    createModel,
    listModel
} = require('../models/index');

// 定义处理方法
const create = async (req, res) => {
    // res.send("stu");
    // 1、接收数据
    var postData = req.body;
    // 2、过滤 
    // 3、操作数据库
    var rs = await createModel(postData);
    // 4、判断返回
    if (rs) {
        res.send({
            meta: {
                state: 200,
                msg: '添加成功'
            },
            data: null
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: '添加失败'
            },
            data: null
        })
    }
}

// 列表
/**
 * @api {get} /stu 学生模块列表
 * @apiName GetStu
 * @apiGroup Stu
 *
 * @apiParam {Number} pageNum 当前页.
 * @apiParam {Number} pageSize 每页显示条数.
 *
 * @apiSuccess {String} meta 状态码&提示信息.
 * @apiSuccess {String} data 数据.
 */

const index = async (req, res) => {
    // res.send('index');
    // 1、接收数据
    var getData = req.query;
    // 2、过滤

    var skip = (parseInt(getData.pageNum) - 1) * parseInt(getData.pageSize);
    // 3、获取数据
    var data = await listModel(skip, parseInt(getData.pageSize));
    // 4、响应数据
    res.send({
        meta: {
            state: 200,
            msg: '查询成功'
        },
        data: data
    })
}

// 导出
module.exports = {
    create,
    index
}