import { RequestHandler } from 'express'
import { INoParam, IResLocals } from '../../types'
import {
  ICreateSolutionDTO,
  IMessageDTO,
  IReqComment,
  IResSolutionDTO,
  IResSolutionsDTO,
  IUpdateSolutionDTO,
} from '../../types/dto'
import { ISolutionIdParam } from '../../types/solution'

export type IMuscleParam = { muscle: string }

export type ISolutionController = {
  getAll: RequestHandler<INoParam, IResSolutionsDTO[]>
  getOne: RequestHandler<ISolutionIdParam, IResSolutionDTO>
  getByMuscle: RequestHandler<IMuscleParam, IResSolutionsDTO[]>
  comment: RequestHandler<ISolutionIdParam, IMessageDTO, IReqComment, unknown, IResLocals>
  create: RequestHandler<INoParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<ISolutionIdParam, unknown, IUpdateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<ISolutionIdParam, unknown, unknown, unknown, IResLocals>
}
