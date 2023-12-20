import { ErrorRequestHandler, Response } from 'express'
import { IMessageDTO } from '../../types/dto'
import { HttpCodeError } from '../../utils/CustomError'

class ErrorHandlerMiddleware {
  httpErrorHandler: ErrorRequestHandler = (err: Error, req, res: Response<IMessageDTO>, next) => {
    if (err instanceof HttpCodeError) {
      console.log(
        `${req.method}\t${req.path}\t${req?.headers?.origin}\t${
          req?.socket?.remoteAddress
        }\t${new Date().toISOString()}\t${err.statuscode}\t${err.message || err.name}`,
      )
      res
        .status(err.statuscode)
        .json({ message: err.message || err.name })
        .end()
    } else {
      console.log(
        `${req.method}\t${req.path}\t${req?.headers?.origin}\t${
          req?.socket?.remoteAddress
        }\t${new Date().toISOString()}\t${500}\t${err.message}`,
      )
      res.status(500).json({ message: 'Internal Server Error' }).end()
    }

    next()
  }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware()
export default errorHandlerMiddleware
