import { INoParam, IResLocals } from '@src/types'
import { IMessageDTO, IReqSpecialistFormDTO, IReqUpdateUserDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type IUserController = {
  getMyData: RequestHandler<INoParam, unknown, unknown, unknown, IResLocals>
  updateMyData: RequestHandler<INoParam, IMessageDTO, IReqUpdateUserDTO, unknown, IResLocals>
  applyRoleSpecialist: RequestHandler<INoParam, IMessageDTO, IReqSpecialistFormDTO, unknown, IResLocals>
}
