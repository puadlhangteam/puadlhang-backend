import { IResLocals } from '@src/types'
import { RequestHandler } from 'express'

export type IAuthMiddleware = {
  decode: RequestHandler
  protected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  specialistProtected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  adminProtected: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
}
