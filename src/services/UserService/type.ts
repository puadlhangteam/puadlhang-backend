import { IUpdateUserDTO, IUserResDTO } from '../../types/dto'
import { IUserCredential } from '../../types/user'

export type IUserService = {
  getUserData: (credential: IUserCredential) => Promise<IUserResDTO>
  updateUserData: (credential: IUserCredential, updateUserData: IUpdateUserDTO) => Promise<void>
}
