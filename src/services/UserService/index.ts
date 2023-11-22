import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { defaultUser } from '../../utils/user'
import { IUserService } from './type'

class UserSrevice implements IUserService {
  constructor(private userRepository: IUserRepository) {}
  getUserData: IUserService['getUserData'] = async (credential) => {
    const { uid } = credential
    let user = await this.userRepository.getUser(uid)
    if (!user) {
      await this.userRepository.createUser(uid, defaultUser(credential))
      user = await this.userRepository.getUser(uid)
    }
    const { uid: u, isAdmin, ...rest } = user!
    return { uid, ...rest }
  }
  updateUserData: IUserService['updateUserData'] = async (credential, updateUserData) => {
    const { uid } = credential
    const { username, age, gender, picture } = updateUserData

    const user = await this.userRepository.getUser(uid)
    if (!user) throw new Error('not found')
    if (user.uid !== uid) throw new Error('Forbidden')
    this.userRepository.updateUser(uid, { username, age, gender, picture })
  }
}

const userSrevice = new UserSrevice(userRepository)
export default userSrevice
export * from './type'
