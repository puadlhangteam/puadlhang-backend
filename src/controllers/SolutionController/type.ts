import { IResLocals } from '@src/types'
import { ICreateSolutionDTO, ISolutionDTO } from '@src/types/dto'
import { RequestHandler } from 'express'

export type ISolutionController = {
  getAll: RequestHandler<unknown, ISolutionDTO[]>
  create: RequestHandler<unknown, unknown, ICreateSolutionDTO, unknown, IResLocals>
  update: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
  delete: RequestHandler<{ solutionId: string }, unknown, ICreateSolutionDTO, unknown, IResLocals>
}
