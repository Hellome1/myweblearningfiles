var https = require('https')

var options = {

    hostname: 'movie.douban.com',
    port: 443,
    method: 'GET',
    path: '/top250/',
    headers: {
        'Cookie': 'bid=b_wI_zXRuWY; ll="118318"; __yadk_uid=WeWL4XImr1E1yPI7xJgL74bkIKoZ8tVM; _vwo_uuid_v2=DA5EC492ECACC990FA55A97625F682B9E|b431b7e22016bf9acd5ca41e6c516399; _ga=GA1.2.2062632168.1613126762; _gid=GA1.2.219461070.1613127090; __utmz=30149280.1613182962.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __gads=ID=9f78b61852258e8a-221c636f02c6002a:T=1613183089:RT=1613183089:S=ALNI_MZxpkbVa4CJMRq8JeOaQJ6vI6lNvA; douban-fav-remind=1; __utma=30149280.2062632168.1613126762.1613182962.1613191760.3; __utma=223695111.745552797.1613126802.1613183583.1613191791.3; __utmb=223695111.0.10.1613191791; __utmz=223695111.1613191791.3.3.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1613191791%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _pk_ses.100001.4cf6=*; ap_v=0,6.0; __utmc=30149280; __utmb=30149280.3.10.1613191760; __utmc=223695111; _pk_id.100001.4cf6=c76f9aad63f93da8.1613126802.3.1613192238.1613183590.',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
    }
}

var request = https.request(options, (response) => {
    console.log(response.statusCode)
    console.log(response.headers)

    response.setEncoding('utf8')
    response.on('data', (chunk) => {
        console.log(chunk)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()