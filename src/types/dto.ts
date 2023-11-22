import { ISolutionData } from './solution'
import { IUserData } from './user'

export type ISpecialistFormDTO = {
  certificate: string
  description?: string
}

export type ISpecialistApproveDTO = {
  formId: string
}
export type IUserDTO = IUserData

export type IUpdateUserDTO = IUserData
export type IMessageDTO = { message: string }

export type ISolutionDTO = ISolutionData & {
  solutionId: string
  comments: {
    OwnerUid: IUserData
    text: string
    rating: number
    createdAt: Date
  }[]
}
export type ICreateSolutionDTO = ISolutionData
