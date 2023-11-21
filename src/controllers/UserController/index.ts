import userSrevice, { IUserService } from '../../services/User'
import { IUserController } from './type'

class UserController implements IUserController {
  constructor(private userService: IUserService) {}
  getMyData: IUserController['getMyData'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) return res.status(401).json({ message: 'unauthorized' })
    const user = await this.userService.getUserData(credential)
    res.status(200).json(user).end()
  }
  updateMyData: IUserController['updateMyData'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) return res.status(401).json({ message: 'unauthorized' })
    await this.userService.updateUserData(credential, req.body)
    res.status(200).json({ message: 'update complete' }).end()
  }
}
const userController = new UserController(userSrevice)
export default userController
export * from './type'
