import { IResLocals } from '@src/types'
import { IMessageDTO, ISpecialistFormDTO, IUpdateUserDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type IUserController = {
  getMyData: RequestHandler<unknown, unknown, unknown, unknown, IResLocals>
  updateMyData: RequestHandler<unknown, IMessageDTO, IUpdateUserDTO, unknown, IResLocals>
  applyRoleSpecialist: RequestHandler<unknown, IMessageDTO, ISpecialistFormDTO, unknown, IResLocals>
}
