import { RequestHandler } from 'express'
import { IResLocals } from '../../types'

class LoggerMiddleware {
  requestLog: RequestHandler<unknown, unknown, unknown, unknown, IResLocals> = (req, res, next) => {
    console.log(
      `${req.method}\t${req.path}\t${req?.headers?.origin}\t${
        req?.socket?.remoteAddress
      }\t${new Date().toISOString()}\t${res?.locals?.credential?.uid || null}`,
    )
    next()
  }
}

const loggerMiddleware = new LoggerMiddleware()
export default loggerMiddleware
