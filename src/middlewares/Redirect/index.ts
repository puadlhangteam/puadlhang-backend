import { RequestHandler } from 'express'

class RedirectMiddleware {
  defaultResponse: RequestHandler = (req, res) => {
    res.status(404).send('path not found')
  }
}

const redirectMiddleware = new RedirectMiddleware()
export default redirectMiddleware
