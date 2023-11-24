import roleSpecialistRepository, { IRoleSpecialistRepository } from '../../repositories/RoleRepository'
import userRepository, { IUserRepository } from '../../repositories/UserRepository'
import { BadRequest400Error, Forbidden403Error, NotFound404Error } from '../../utils/CustomError'
import { isString } from '../../utils/validate'
import { IRoleSpecialistService } from './type'

class RoleSpecialistService implements IRoleSpecialistService {
  constructor(private roleSpecialistRepository: IRoleSpecialistRepository, private userRepository: IUserRepository) {}

  getAll: IRoleSpecialistService['getAll'] = () => {
    return this.roleSpecialistRepository.getAll()
  }

  approved: IRoleSpecialistService['approved'] = async (formId) => {
    if (!isString(formId)) throw new BadRequest400Error('formId required')

    const formData = await this.roleSpecialistRepository.getOne(formId)
    if (!formData) throw new NotFound404Error('Specialist Application Not Found')

    await Promise.all([
      this.roleSpecialistRepository.approved(formId),
      this.userRepository.grantSpecialistRole(formData.uid, formData.formId),
    ])
  }

  apply: IRoleSpecialistService['apply'] = async (credential, formData) => {
    const { uid } = credential
    const { certificate, description } = formData
    if (!isString(certificate)) throw new BadRequest400Error('Invalid certificate')
    if (description && isString(description)) throw new BadRequest400Error('Invalid description')
    const existForm = await this.roleSpecialistRepository.getOneByUid(uid)
    if (!existForm) {
      this.roleSpecialistRepository.apply({ uid, certificate, description })
    } else {
      this.roleSpecialistRepository.update(existForm.formId, { certificate, description })
    }
  }

  checkSpecialistStatus: IRoleSpecialistService['checkSpecialistStatus'] = async (credential, formId) => {
    const { uid } = credential

    const form = await this.roleSpecialistRepository.getOne(formId)
    if (!form || uid !== form.uid) throw new Forbidden403Error()
    return form
  }
}

const roleSpecialistService = new RoleSpecialistService(roleSpecialistRepository, userRepository)

export default roleSpecialistService
export * from './type'
