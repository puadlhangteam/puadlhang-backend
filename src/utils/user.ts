import { IUser, IUserCredential } from '../types/user'

export const defaultUser = (userData: IUserCredential): IUser => {
  const { email, name, uid, picture } = userData
  return {
    email,
    username: name || email.split('@')[0],
    uid,
    picture: picture || undefined,
  }
}
