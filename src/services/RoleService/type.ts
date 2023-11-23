import { ISpecialistFormDTO } from '@src/types/dto'
import { ISpecialistApplication } from '@src/types/role'
import { IUserCredential } from '@src/types/user'

export type IRoleSpecialistService = {
  apply: (credential: IUserCredential, formData: ISpecialistFormDTO) => Promise<void>
  getAll: () => Promise<ISpecialistApplication[]>
  approved: (formId: string) => Promise<void>
  checkSpecialistStatus: (credential: IUserCredential, formId: string) => Promise<ISpecialistApplication>
}
