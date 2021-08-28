var crypto = require('crypto')
var captcha = require('trek-captcha')

var setCrypto = (password) => {
  return crypto.createHmac('sha256', '$@##aa')
    .update(password)
    .digest('hex')
}

var createVerify = (req, res) => {
  return captcha().then((info) => {
    req.session.verifyImg = info.token
    return info.buffer
  }).catch(() => {
    return false
  })
}

module.exports = {
  setCrypto,
  createVerify
}