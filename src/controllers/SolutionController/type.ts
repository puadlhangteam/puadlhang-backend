import { RequestHandler } from 'express'
import { INoParam, IResLocals } from '../../types'
import { ICreateSolutionDTO, IMessageDTO, IReqComment, IResSolutionDTO, IResSolutionsDTO } from '../../types/dto'
import { ISolutionIdParam } from '../../types/solution'

export type ISolutionController = {
  getAll: RequestHandler<INoParam, IResSolutionsDTO[]>
  getOne: RequestHandler<ISolutionIdParam, IResSolutionDTO>
  comment: RequestHandler<ISolutionIdParam, IMessageDTO, IReqComment, unknown, IResLocals>
  create: RequestHandler<INoParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<ISolutionIdParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<ISolutionIdParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
}
