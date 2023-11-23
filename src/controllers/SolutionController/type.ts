import { IResLocals } from '@src/types'
import { ICreateSolutionDTO, IResSolutionDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type ISolutionController = {
  getAll: RequestHandler<unknown, IResSolutionDTO[]>
  create: RequestHandler<unknown, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
}
