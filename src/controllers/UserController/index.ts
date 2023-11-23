import roleSpecialistService, { IRoleSpecialistService } from '@src/services/RoleService'
import userSrevice, { IUserService } from '@src/services/UserService'
import { UnAuthorized401Error } from '@src/utils/CustomError'
import { IUserController } from './type'

class UserController implements IUserController {
  constructor(private userService: IUserService, private roleSpecialistService: IRoleSpecialistService) {}
  getMyData: IUserController['getMyData'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    const user = await this.userService.getUserData(credential)

    res.status(200).json(user).end()
  }
  updateMyData: IUserController['updateMyData'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    await this.userService.updateUserData(credential, req.body)

    res.status(200).json({ message: 'update complete' }).end()
  }
  applyRoleSpecialist: IUserController['applyRoleSpecialist'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    await this.roleSpecialistService.apply(credential, req.body)
    res.status(201).json({ message: 'form applied' })
  }
}

const userController = new UserController(userSrevice, roleSpecialistService)
export default userController
export * from './type'
