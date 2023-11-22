import { IUserCredential } from '../../types/user'

export type IAdminService = {
  grantSpecialistRole: (adminCredential: IUserCredential, userUid: string) => Promise<void>
}
