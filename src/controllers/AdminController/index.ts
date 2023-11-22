import roleSpecialistService, { IRoleSpecialistService } from '../../services/RoleService'
import { IAdminController } from './type'

class AdminController implements IAdminController {
  constructor(private roleSpecialistService: IRoleSpecialistService) {}
  get: any
  approveRoleSpecialist: IAdminController['approveRoleSpecialist'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new Error('unauthenticated')
    const { formId } = req.body
    if (!formId) throw new Error('missing')
    await this.roleSpecialistService.approved(formId)
    res.status(200).json({ message: 'role update complete' })
  }
  getRoleSpecialistApplication: IAdminController['getRoleSpecialistApplication'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new Error('unauthenticated')
    const result = await this.roleSpecialistService.getAll()
    res.status(200).json(result).end()
  }
}

const adminController = new AdminController(roleSpecialistService)
export default adminController
export * from './type'
