import { RequestHandler } from 'express'
import { IResLocals } from '../../types'
import { IMessageDTO, ISpecialistFormDTO, IUpdateUserDTO } from '../../types/dto'

export type IUserController = {
  getMyData: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  updateMyData: RequestHandler<unknown, IMessageDTO, IUpdateUserDTO, unknown, IResLocals>
  applyRoleSpecialist: RequestHandler<unknown, IMessageDTO, ISpecialistFormDTO, unknown, IResLocals>
}
