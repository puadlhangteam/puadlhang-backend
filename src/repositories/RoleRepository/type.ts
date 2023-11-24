import { ISpecialistApplication, ISpecialistForm } from '../../types/role'

export type IRoleSpecialistRepository = {
  apply: (formBody: ISpecialistForm) => Promise<void>
  update: (formId: string, formBody: Partial<ISpecialistForm>) => Promise<void>
  getAll: () => Promise<ISpecialistApplication[]>
  getOne: (formId: string) => Promise<ISpecialistApplication | null>
  getOneByUid: (uid: string) => Promise<ISpecialistApplication | null>
  approved: (formId: string) => Promise<void>
}
