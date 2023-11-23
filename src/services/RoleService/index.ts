import roleSpecialistRepository, { IRoleSpecialistRepository } from '@src/repositories/RoleRepository'
import userRepository, { IUserRepository } from '@src/repositories/UserRepository'
import { IRoleSpecialistService } from './type'

class RoleSpecialistService implements IRoleSpecialistService {
  constructor(private roleSpecialistRepository: IRoleSpecialistRepository, private userRepository: IUserRepository) {}
  getAll: IRoleSpecialistService['getAll'] = () => {
    return this.roleSpecialistRepository.getAll()
  }
  approved: IRoleSpecialistService['approved'] = async (formId) => {
    const formData = await this.roleSpecialistRepository.getOne(formId)
    if (!formData) throw new Error('Invalid form')
    await Promise.all([
      this.roleSpecialistRepository.approved(formId),
      this.userRepository.grantSpecialistRole(formData.uid, formData.formId),
    ])
  }

  apply: IRoleSpecialistService['apply'] = async (credential, formData) => {
    const { uid } = credential
    const { certificate, description } = formData
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
    if (!form || uid !== form.uid) throw new Error('invalid')
    return form
  }
}

const roleSpecialistService = new RoleSpecialistService(roleSpecialistRepository, userRepository)

export default roleSpecialistService
export * from './type'
