import { ErrorRequestHandler, Response } from 'express'
import { IMessageDTO } from '../../types/dto'

class ErrorHandlerMiddleware {
  httpErrorHandler: ErrorRequestHandler = (err: Error, req, res: Response<IMessageDTO>, next) => {
    //   if (err instanceof (HttpCodeError || err instanceof ValidationError)) {
    //     res
    //       .status(err.statuscode || 400)
    //       .json({ message: err.message })
    //       .end()
    //   } else {
    console.log(`${500}\t${err.message}`)
    res.status(500).json({ message: err.message }).end()
    //   }

    next()
  }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware()
export default errorHandlerMiddleware
