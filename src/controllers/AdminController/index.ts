import roleSpecialistService, { IRoleSpecialistService } from '../../services/RoleService'
import { UnAuthorized401Error } from '../../utils/CustomError'
import { IAdminController } from './type'

class AdminController implements IAdminController {
  constructor(private roleSpecialistService: IRoleSpecialistService) {}

  approveRoleSpecialist: IAdminController['approveRoleSpecialist'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    const { formId } = req.body

    await this.roleSpecialistService.approved(formId)

    res.status(200).json({ message: 'role update complete' })
  }
  getRoleSpecialistApplication: IAdminController['getRoleSpecialistApplication'] = async (req, res) => {
    const { credential } = res.locals
    if (!credential) throw new UnAuthorized401Error()

    const result = await this.roleSpecialistService.getAll()

    res.status(200).json(result).end()
  }
}

const adminController = new AdminController(roleSpecialistService)
export default adminController
export * from './type'
