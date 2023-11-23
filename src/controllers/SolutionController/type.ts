import { RequestHandler } from 'express'
import { IResLocals } from '../../types'
import { ICreateSolutionDTO, ISolutionDTO } from '../../types/dto'

export type ISolutionController = {
  getAll: RequestHandler<unknown, ISolutionDTO[]>
  create: RequestHandler<unknown, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
}
