import { ErrorRequestHandler, Response } from 'express'
import { IMessageDTO } from '../../types/dto'
import { HttpCodeError } from '../../utils/CustomError'

class ErrorHandlerMiddleware {
  httpErrorHandler: ErrorRequestHandler = (err: Error, req, res: Response<IMessageDTO>, next) => {
    if (err instanceof HttpCodeError) {
      console.log(`${err.statuscode}\t${err.message || err.name}`)
      res
        .status(err.statuscode)
        .json({ message: err.message || err.name })
        .end()
    } else {
      console.log(`${500}\t${err.message}\t${new Date().toISOString()}`)
      res.status(500).json({ message: err.message }).end()
    }

    next()
  }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware()
export default errorHandlerMiddleware
