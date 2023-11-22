import { auth } from '../../config/service-accounts'
import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { IUserCredential } from '../../types/user'
import { IAuthMiddleware } from './type'

class AuthMiddleware implements IAuthMiddleware {
  constructor(private userRepository: IUserRepository) {}
  decode: IAuthMiddleware['decode'] = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) return next()

    const token = authorization.replace('Bearer ', '')
    if (!token) throw new Error('invalid token')

    const credential = (await auth.verifyIdToken(token)) as IUserCredential
    res.locals = { ...res.locals, credential }
    next()
  }
  protected: IAuthMiddleware['protected'] = (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new Error('unauthorized')
    next()
  }
  specialistProtected: IAuthMiddleware['specialistProtected'] = async (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new Error('unauthorized')
    const user = await this.userRepository.getUser(credential.uid)
    if (!user || !user.isSpecialist) throw new Error('Forbidden')
    next()
  }
  adminProtected: IAuthMiddleware['adminProtected'] = async (req, res, next) => {
    const credential = res.locals.credential
    if (!credential || !credential.uid) throw new Error('unauthorized')
    const user = await this.userRepository.getUser(credential.uid)
    if (!user || !user.isAdmin) throw new Error('Forbidden')
    next()
  }
}

const authMiddleware = new AuthMiddleware(userRepository)
export default authMiddleware
export * from './type'
