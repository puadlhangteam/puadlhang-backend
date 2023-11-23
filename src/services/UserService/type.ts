import { IUpdateUserDTO, IUserDTO } from '../../types/dto'
import { IUserCredential } from '../../types/user'

export type IUserService = {
  getUserData: (credential: IUserCredential) => Promise<IUserDTO>
  updateUserData: (credential: IUserCredential, updateUserData: IUpdateUserDTO) => Promise<void>
}
