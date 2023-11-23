import { IReqUpdateUserDTO, IUserDTO } from '@src/types/dto'
import { IUserCredential } from '@src/types/user'

export type IUserService = {
  getUserData: (credential: IUserCredential) => Promise<IUserDTO>
  updateUserData: (credential: IUserCredential, updateUserData: IReqUpdateUserDTO) => Promise<void>
}
