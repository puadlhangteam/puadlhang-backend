import { RequestHandler } from 'express'
import { IResLocals } from '../../types'
import { IGrantRoleDTO } from '../../types/dto'

export type IAdminController = {
  grantSpecialistRole: RequestHandler<unknown, unknown, IGrantRoleDTO, unknown, IResLocals>
}
