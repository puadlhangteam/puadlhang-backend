import { RequestHandler } from 'express'
import { IResLocals } from '../../types'

export type IAuthMiddleware = {
  decode: RequestHandler
  protected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  specialistProtected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  adminProtected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
}
