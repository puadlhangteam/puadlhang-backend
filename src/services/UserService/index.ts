import userRepository, { IUserRepository } from '@src/repositories/UserRepository'
import { BadRequest400Error, Forbidden403Error } from '@src/utils/CustomError'
import { defaultUser } from '@src/utils/user'
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

    const { isAdmin, ...rest } = user!
    return rest
  }

  updateUserData: IUserService['updateUserData'] = async (credential, updateUserData) => {
    const { uid } = credential
    const { username, age, gender, picture } = updateUserData
    if (age && isNaN(age)) throw new BadRequest400Error('age must be number')
    if (gender && !['male', 'female'].includes(gender)) throw new BadRequest400Error('gender must be male or female')

    const user = await this.userRepository.getUser(uid)
    if (!user || user.uid !== uid) throw new Forbidden403Error()
    this.userRepository.updateUser(uid, { username, age: age && +age, gender, picture })
  }
}

const userSrevice = new UserSrevice(userRepository)
export default userSrevice
export * from './type'
