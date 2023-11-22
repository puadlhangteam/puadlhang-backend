import { RequestHandler } from 'express'
import { IResLocals } from '../../types'
import { ISpecialistApproveDTO } from '../../types/dto'

export type IAdminController = {
  approveRoleSpecialist: RequestHandler<unknown, unknown, ISpecialistApproveDTO, unknown, IResLocals>
  getRoleSpecialistApplication: RequestHandler<unknown, ISpecialistApproveDTO[], unknown, unknown, IResLocals>
}
