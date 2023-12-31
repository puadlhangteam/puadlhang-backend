import { IReqSpecialistFormDTO } from '../../types/dto'
import { ISpecialistApplication } from '../../types/role'
import { IUserCredential } from '../../types/user'

export type IRoleSpecialistService = {
  apply: (credential: IUserCredential, formData: IReqSpecialistFormDTO) => Promise<void>
  getAll: () => Promise<ISpecialistApplication[]>
  approved: (formId: string) => Promise<void>
  checkSpecialistStatus: (credential: IUserCredential, formId: string) => Promise<ISpecialistApplication>
}
