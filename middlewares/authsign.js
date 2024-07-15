const Redis = require('ioredis')
const crypto = require('crypto')
const CustomError = require('../CustomError')

const authSign = async (ctx, next) => {
  console.log('authSign')
  const params = sortJSON(ctx.request.body)
  // console.log(params)
  const paramsText = JSON.stringify(params)
  console.log(paramsText)
  const chiperText = crypto.createHmac('sha256', 'emDmpsE2Ad4wLLYwD66xjzY1eZhVHyEqSPrAxIcaC66xR9mkgzJJ9GswVyUyiWRb8MXfY9fKZlRuvEURySHMY8X6D5GqjMYKLUiIDs6Zq6uH9LJn4nArFje5SY0C1Yfk').update(paramsText).digest('hex')
  console.log(chiperText)
  if (ctx.headers['sign'] === chiperText) {
    await next()
  } else {
    console.log('authSign failed 910')
    throw new CustomError(401, 'Authentication Failed', 910)
  }
}

function sortJSON(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys)
  }

  const sortedObj = {}
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = sortJSON(obj[key])
    })

  return sortedObj
}

module.exports = authSign
