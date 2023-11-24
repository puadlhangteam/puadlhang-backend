import { INoParam, IResLocals } from '@src/types'
import { IReqSpecialistApprovedDTO, ISpecialistApplicationDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type IAdminController = {
  approveRoleSpecialist: RequestHandler<INoParam, unknown, IReqSpecialistApprovedDTO, unknown, IResLocals>
  getRoleSpecialistApplication: RequestHandler<INoParam, ISpecialistApplicationDTO[], unknown, unknown, IResLocals>
}
