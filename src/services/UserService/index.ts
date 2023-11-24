import { AllowGender } from '../../config'
import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { BadRequest400Error, Forbidden403Error } from '../../utils/CustomError'
import { defaultUser } from '../../utils/user'
import { isNumber, isString, isValidValue } from '../../utils/validate'
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
    if (username && !isString(username)) throw new BadRequest400Error('username must be string')
    if (age && !isNumber(age)) throw new BadRequest400Error('age must be number')
    if (gender && !isValidValue(gender, AllowGender)) throw new BadRequest400Error('gender must be male or female')
    if (picture && !isString(picture)) throw new BadRequest400Error('picture must be string')
    const user = await this.userRepository.getUser(uid)
    if (!user || user.uid !== uid) throw new Forbidden403Error()
    this.userRepository.updateUser(uid, { username, age: age && +age, gender, picture })
  }
}

const userSrevice = new UserSrevice(userRepository)
export default userSrevice
export * from './type'
