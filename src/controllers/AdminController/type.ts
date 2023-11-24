import { RequestHandler } from 'express'
import { INoParam, IResLocals } from '../../types'
import { IReqSpecialistApprovedDTO, ISpecialistApplicationDTO } from '../../types/dto'

export type IAdminController = {
  approveRoleSpecialist: RequestHandler<INoParam, unknown, IReqSpecialistApprovedDTO, unknown, IResLocals>
  getRoleSpecialistApplication: RequestHandler<INoParam, ISpecialistApplicationDTO[], unknown, unknown, IResLocals>
}
