const Redis = require('ioredis')
const crypto = require('crypto')

const authSign = async (ctx, next) => {
  // console.log('authSign')
  await next()
}

module.exports = authSign
