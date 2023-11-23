import userRepository, { IUserRepository } from '@src/repositories/UserRepository'
import { IAdminService } from './type'

class AdminService implements IAdminService {
  constructor(private userRepository: IUserRepository) {}
  // grantSpecialistRole: IAdminService['grantSpecialistRole'] = async (adminCredential, userUid) => {
  //   const { uid: adminUid } = adminCredential
  //   const admin = await this.userRepository.getUser(adminUid)
  //   if (!admin || !admin.isAdmin) throw new Error('U r not admin')

  //   return await this.userRepository.grantSpecialistRole(userUid)
  // }
}

const adminService = new AdminService(userRepository)
export default adminService
export * from './type'
