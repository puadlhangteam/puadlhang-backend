import { IReqUpdateUserDTO, IResUserDTO } from '../../types/dto'
import { IUserCredential } from '../../types/user'

export type IUserService = {
  getUserData: (credential: IUserCredential) => Promise<IResUserDTO>
  updateUserData: (credential: IUserCredential, updateUserData: IReqUpdateUserDTO) => Promise<void>
}
