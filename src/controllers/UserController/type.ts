import { IResLocals } from '@src/types'
import { IMessageDTO, IReqSpecialistFormDTO, IReqUpdateUserDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type IUserController = {
  getMyData: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  updateMyData: RequestHandler<unknown, IMessageDTO, IReqUpdateUserDTO, unknown, IResLocals>
  applyRoleSpecialist: RequestHandler<unknown, IMessageDTO, IReqSpecialistFormDTO, unknown, IResLocals>
}
