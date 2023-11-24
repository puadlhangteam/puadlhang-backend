import { IReqComment, IResSolutionDTO, IResSolutionsDTO } from '@src/types/dto'
import { ISolutionData } from '@src/types/solution'
import { IUserCredential } from '@src/types/user'

export type ISolutionService = {
  getAll: () => Promise<IResSolutionsDTO[]>
  getOne: (solutionId: string) => Promise<IResSolutionDTO>
  comment: (solutionId: string, credential: IUserCredential, commentData: IReqComment) => Promise<void>
  create: (solutionData: ISolutionData) => Promise<void>
  update: (solutionId: string, solutionData: Partial<ISolutionData>) => Promise<void>
  delete: (solutionId: string) => Promise<void>
}
