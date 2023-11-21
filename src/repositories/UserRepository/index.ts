import { CollectionReference } from 'firebase-admin/firestore'
import { db } from '../../config/service-accounts'
import { IUser } from '../../types/user'
import { IUserRepository } from './type'

class UserRepository implements IUserRepository {
  constructor(private User: CollectionReference) {}
  getUser: IUserRepository['getUser'] = async (uid) => {
    const result = await this.User.doc(uid).get()
    return result.data() as IUser
  }
  grantSpecialistRole: IUserRepository['grantSpecialistRole'] = async (uid) => {
    this.User.doc(uid).update({ isSpecialist: true })
  }
  createUser: IUserRepository['createUser'] = async (uid, data) => {
    this.User.doc(uid).create(data)
  }
  updateUser: IUserRepository['updateUser'] = async (uid, data) => {
    const { uid: newUid, ...rest } = data
    this.User.doc(uid).update(rest)
  }
}

const userRepository = new UserRepository(db.collection('users'))
export default userRepository
export * from './type'
