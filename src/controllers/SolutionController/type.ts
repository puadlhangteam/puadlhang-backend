import { INoParam, IResLocals } from '@src/types'
import { ICreateSolutionDTO, IResSolutionDTO, IResSolutionsDTO } from '@src/types/dto'
import { ISolutionIdParam } from '@src/types/solution'
import { RequestHandler } from 'express'

export type ISolutionController = {
  getAll: RequestHandler<INoParam, IResSolutionsDTO[]>
  getOne: RequestHandler<ISolutionIdParam, IResSolutionDTO>
  create: RequestHandler<INoParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<ISolutionIdParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<ISolutionIdParam, unknown, ICreateSolutionDTO, unknown, IResLocals>
}
