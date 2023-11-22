import { IUser, IUserData } from '../../types/user'

export type IUserRepository = {
  getUser: (uid: string) => Promise<IUser | undefined>
  createUser: (uid: string, data: IUserData) => Promise<void>
  updateUser: (uid: string, data: Partial<IUserData>) => Promise<void>
  grantSpecialistRole: (uid: string) => Promise<void>
}
