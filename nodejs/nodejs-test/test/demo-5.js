const chai = require('chai');
const expect = chai.expect;

var Demo = require('../lib/demo.js');

var demo = new Demo();

describe('Demo', () => {

    it('给汽车引擎加水是不能接受的事情', function () {
        expect(demo.engine.bind(demo, 'water')).to.throw('not accept');
    })

    // it('给汽车引擎加水是不能接受的事情', function () {
    //     expect(function () {
    //         demo.engine('water');
    //     }).to.throw('not accept');
    // })
    
    // it('一段时间以后返回数据', function () {
    //     demo.waitTwoSecond('hello', function (data) {
    //         expect(data).to.equal('hello');
    //     })
    // })

    // it('单价 10 块钱的 3 件商品小计金额应该是 30 块', function () {
    //     var subtotal = demo.subtotal(10, 3);
    //     expect(subtotal).to.equal(30);
    // })
})