const async = require("async")

// 串行无关联
console.time("test")
async.series([
    function (callback) {
        setTimeout(function () {
            callback(null, "one")
        }, 2000)
    },
    function (callback) {
        setTimeout(function () {
            callback(null, "two")
        }, 5000)
    }
], function (err, results) {
    console.log(results)
    console.timeEnd("test")
})