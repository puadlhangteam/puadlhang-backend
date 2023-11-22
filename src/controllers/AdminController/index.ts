import adminService, { IAdminService } from '../../services/AdminService'
import { IAdminController } from './type'

class AdminController implements IAdminController {
  constructor(private adminService: IAdminService) {}
  grantSpecialistRole: IAdminController['grantSpecialistRole'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new Error('unauthenticated')
    const { uid: userUid } = req.body
    await this.adminService.grantSpecialistRole(credential, userUid)
    res.status(200).json({ message: 'role update complete' })
  }
}

const adminController = new AdminController(adminService)
export default adminController
export * from './type'
