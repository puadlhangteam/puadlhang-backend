import { IUser, IUserData } from '@src/types/user'

export type IUserRepository = {
  getUser: (uid: string) => Promise<IUser | undefined>
  createUser: (uid: string, data: IUserData) => Promise<void>
  updateUser: (uid: string, data: Partial<IUserData>) => Promise<void>
  grantSpecialistRole: (uid: string, formId: string) => Promise<void>
}
