import { IReqComment, IResSolutionDTO, IResSolutionsDTO } from '../../types/dto'
import { ISolutionData } from '../../types/solution'
import { IUserCredential } from '../../types/user'

export type ISolutionService = {
  getAll: () => Promise<IResSolutionsDTO[]>
  getOne: (solutionId: string) => Promise<IResSolutionDTO>
  getByMuscle: (muscle: string) => Promise<IResSolutionsDTO[]>
  comment: (solutionId: string, credential: IUserCredential, commentData: IReqComment) => Promise<void>
  create: (solutionData: ISolutionData) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
