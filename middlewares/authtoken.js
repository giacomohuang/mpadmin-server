const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const CustomError = require('../CustomError')

const authToken = async (ctx, next) => {
  console.log('authToken')
  let token = '',
    decoded,
    err
  let t = ctx.request.headers['authorization']
  if (t) {
    token = t.replace(/^bearer\s+/i, '')
  } else {
    throw new CustomError(401, 'Authentication Failed', 901)
  }
  jwt.verify(token, process.env.SECRET_KEY_ACCESS, (error, d) => {
    decoded = d
    err = error
  })
  // 如果accesstoken验证通过，放行
  if (decoded) {
    ctx.request.headers['accountid'] = decoded.id
    await next()
  }
  // 如果是token过期
  // 开始验证refreshtoken
  else if (err.name === 'TokenExpiredError') {
    const result = await refresh(ctx.request.headers['refreshtoken'], ctx)
    ctx.set({
      newaccesstoken: result.accessToken,
      newrefreshtoken: result.refreshToken
    })
    ctx.request.headers['accountid'] = result.id
    console.log('token is refreshed!!!!!!')
    await next()
  }
  // 如果accesstoken内容验证失败
  else {
    throw new CustomError(401, 'Authentication Failed', 902)
  }
}

const refresh = async (token, ctx) => {
  try {
    console.log('!!!start refreshing token!!!')
    // 判断redis中有没有sha的refreshtoken,
    const refreshtoken_old = token
    const shaToken_old = crypto.createHmac('sha256', process.env.SECRET_KEY_REFRESH).update(refreshtoken_old).digest('hex')
    const isExist = await ctx.redis.del(`auth:${shaToken_old}`)
    if (!isExist) {
      throw new CustomError(401, 'Authentication Failed', 903)
    }
    // 验证refreshtoken是否合法，不合法抛异常
    const verify = jwt.verify(refreshtoken_old, process.env.SECRET_KEY_REFRESH)
    const { id, accountname } = verify
    console.log('isExist', isExist)
    const accessToken = jwt.sign({ id: id, accountname: accountname }, process.env.SECRET_KEY_ACCESS, { expiresIn: '30s' })
    const refreshToken = jwt.sign({ id: id, accountname: accountname }, process.env.SECRET_KEY_REFRESH, { expiresIn: '30d' })
    const shaToken = crypto.createHmac('sha256', process.env.SECRET_KEY_REFRESH).update(refreshToken).digest('hex')
    await ctx.redis.set(`auth:${shaToken}`, 't', 'EX', 2592000)
    return { accessToken, refreshToken, id }
  } catch (err) {
    throw new CustomError(401, 'Authentication Failed', 904)
  }
}

module.exports = authToken
