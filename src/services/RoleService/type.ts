import { ISpecialistFormDTO } from '../../types/dto'
import { ISpecialistApplication } from '../../types/role'
import { IUserCredential } from '../../types/user'

export type IRoleSpecialistService = {
  apply: (credential: IUserCredential, formData: ISpecialistFormDTO) => Promise<void>
  getAll: () => Promise<ISpecialistApplication[]>
  approved: (formId: string) => Promise<void>
  checkSpecialistStatus: (credential: IUserCredential, formId: string) => Promise<ISpecialistApplication>
}
