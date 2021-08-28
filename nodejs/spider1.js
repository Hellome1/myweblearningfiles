const https = require('https')
const url = 'https://www.douban.com/j/explore/rec_feed?start=0&max_id=None&count=30'

https.get(url, function (res) {
    var html = ''
    res.on('data', function (data) {
        html += data
    })

    res.on('end', function () {
        console.log(html)
    })

    res.on('error', function (error) {
        console.log(error)
    })
})