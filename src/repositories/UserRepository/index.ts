import { CollectionReference, db } from '@src/config/firebase'
import { RedisClientType, redisClient } from '@src/config/redis'
import { IUser } from '@src/types/user'
import { IUserRepository } from './type'

class UserRepository implements IUserRepository {
  constructor(private User: CollectionReference, private redisClient: RedisClientType) {}
  getUser: IUserRepository['getUser'] = async (uid) => {
    const redisResult = await this.redisClient.get(`user_${uid}`)
    if (redisResult) return JSON.parse(redisResult) as IUser

    const result = await this.User.doc(uid).get()
    const userdata = result.data() as IUser | undefined
    if (userdata) this.redisClient.set(`user_${uid}`, JSON.stringify(userdata))

    return userdata
  }
  grantSpecialistRole: IUserRepository['grantSpecialistRole'] = async (uid, formId) => {
    Promise.all([this.redisClient.del(`user_${uid}`), this.User.doc(uid).update({ isSpecialist: formId })])
  }
  createUser: IUserRepository['createUser'] = async (uid, data) => {
    this.User.doc(uid).set(data)
  }
  updateUser: IUserRepository['updateUser'] = async (uid, data) => {
    const { uid: newUid, ...rest } = data
    Promise.all([this.redisClient.del(`user_${uid}`), this.User.doc(uid).update(rest)])
  }
}

const userRepository = new UserRepository(db.collection('users'), redisClient)
export default userRepository
export * from './type'
