import { IComment, ICreateSolution, ISolutionData, ISolutionModel } from '@src/types/solution'

export type ISolutionRepository = {
  getAll: () => Promise<ISolutionModel[]>
  getOne: (solutionId: string) => Promise<ISolutionModel | undefined>
  comment: (solutionId: string, commentData: IComment) => Promise<void>
  create: (solutionData: ICreateSolution) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
