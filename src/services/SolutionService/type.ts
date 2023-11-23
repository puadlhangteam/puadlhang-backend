import { IResSolutionDTO } from '@src/types/dto'
import { ISolutionData } from '@src/types/solution'

export type ISolutionService = {
  getAll: () => Promise<IResSolutionDTO[]>
  create: (solutionData: ISolutionData) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
