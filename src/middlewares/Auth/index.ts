import { auth } from '../../config/firebase'
import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { IUserCredential } from '../../types/user'
import { Forbidden403Error, UnAuthorized401Error } from '../../utils/CustomError'
import { IAuthMiddleware } from './type'

class AuthMiddleware implements IAuthMiddleware {
  constructor(private userRepository: IUserRepository) {}
  decode: IAuthMiddleware['decode'] = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) return next()

    if (!authorization.startsWith('Bearer ')) throw new UnAuthorized401Error('Invalid token')
    const token = authorization.replace('Bearer ', '')
    if (!token) throw new UnAuthorized401Error('Invalid token')

    const credential = (await auth.verifyIdToken(token).catch((err: Error) => {
      if (err.message.includes('Firebase ID token has expired.')) throw new UnAuthorized401Error('Token Expired')
      if (err.message.includes('Firebase ID token has invalid signature'))
        throw new UnAuthorized401Error('Invalid token')
      throw err
    })) as IUserCredential
    res.locals = { ...res.locals, credential }
    next()
  }
  protected: IAuthMiddleware['protected'] = (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new UnAuthorized401Error()
    next()
  }
  specialistProtected: IAuthMiddleware['specialistProtected'] = async (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new UnAuthorized401Error()
    const user = await this.userRepository.getUser(credential.uid)
    if (!user || !user.isSpecialist) throw new Forbidden403Error()
    next()
  }
  adminProtected: IAuthMiddleware['adminProtected'] = async (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new UnAuthorized401Error()
    const user = await this.userRepository.getUser(credential.uid)
    if (!user || !user?.isAdmin) throw new Forbidden403Error()
    next()
  }
}

const authMiddleware = new AuthMiddleware(userRepository)
export default authMiddleware
export * from './type'
