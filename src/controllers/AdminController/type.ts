import { IResLocals } from '@src/types'
import { ISpecialistApproveDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type IAdminController = {
  approveRoleSpecialist: RequestHandler<unknown, unknown, ISpecialistApproveDTO, unknown, IResLocals>
  getRoleSpecialistApplication: RequestHandler<unknown, ISpecialistApproveDTO[], unknown, unknown, IResLocals>
}
