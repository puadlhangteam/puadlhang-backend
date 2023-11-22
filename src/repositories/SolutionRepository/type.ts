import { ISolutionDTO } from '../../types/dto'
import { ISolutionData } from '../../types/solution'

export type ISolutionRepository = {
  getAll: () => Promise<ISolutionDTO[]>
  create: (solutionData: ISolutionData) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
