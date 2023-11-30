import { RequestHandler } from 'express'
import { IResLocals } from '../../types'

class LoggerMiddleware {
  requestLog: RequestHandler<unknown, unknown, unknown, unknown, IResLocals> = (req, res, next) => {
    console.log(
      `${req.method}\t${req?.headers?.origin}\t${req.path}\t${
        res?.locals?.credential?.uid || null
      }\t${new Date().toISOString()}`,
    )
    next()
  }
}

const loggerMiddleware = new LoggerMiddleware()
export default loggerMiddleware
