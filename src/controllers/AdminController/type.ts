import { RequestHandler } from 'express'
import { INoParam, IResLocals } from '../../types'
import { IReqSpecialistApprovedDTO, IResSpecialistFormDTO } from '../../types/dto'

export type IAdminController = {
  approveRoleSpecialist: RequestHandler<INoParam, unknown, IReqSpecialistApprovedDTO, unknown, IResLocals>
  getRoleSpecialistApplication: RequestHandler<INoParam, IResSpecialistFormDTO[], unknown, unknown, IResLocals>
}
