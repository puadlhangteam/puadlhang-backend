import { RequestHandler } from 'express'
import { INoParam, IResLocals } from '../../types'
import { IMessageDTO, IReqSpecialistFormDTO, IReqUpdateUserDTO } from '../../types/dto'

export type IUserController = {
  getMyData: RequestHandler<INoParam, unknown, unknown, unknown, IResLocals>
  updateMyData: RequestHandler<INoParam, IMessageDTO, IReqUpdateUserDTO, unknown, IResLocals>
  applyRoleSpecialist: RequestHandler<INoParam, IMessageDTO, IReqSpecialistFormDTO, unknown, IResLocals>
}
