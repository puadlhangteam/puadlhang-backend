import { ISolutionData, ISolutionModel } from '@src/types/solution'

export type ISolutionRepository = {
  getAll: () => Promise<ISolutionModel[]>
  create: (solutionData: ISolutionData) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
