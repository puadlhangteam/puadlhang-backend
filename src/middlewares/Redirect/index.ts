import { RequestHandler } from 'express'

class RedirectMiddleware {
  defaultResponse: RequestHandler = (req, res) => {
    return res.status(404).send('path not found').end()
  }
}

const redirectMiddleware = new RedirectMiddleware()
export default redirectMiddleware
