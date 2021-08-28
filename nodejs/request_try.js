const request = require("request")

request({
    url: "https://www.douban.com/j/explore/rec_feed?start=0&max_id=None&count=30",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, null, 2))
})