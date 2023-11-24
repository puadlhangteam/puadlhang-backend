import { IAllowGender, TAllowLevel } from '../config'
export type ID = string
// user request a specialist status
export type IReqSpecialistFormDTO = {
  certificate: string
  description?: string
}
// admin approve user specialist form
export type IReqSpecialistApprovedDTO = {
  formId: ID
}

export type IResSpecialistFormDTO = IReqSpecialistFormDTO & {
  uid: ID
  formId: ID
}

// user data
export type IResUserDTO = {
  username: string
  uid: ID
  email: string
  picture?: string
  gender?: IAllowGender
  age?: number
  isSpecialist?: boolean
}

// update user data
export type IReqUpdateUserDTO = Partial<IResUserDTO>

// general response
export type IMessageDTO = { message: string }

// create solution
export type ICreateSolutionDTO = {
  name: string
  type: string
  muscle: string
  items?: string[]
  level: TAllowLevel
  solutions: string[]
  pictures: string[]
  videoUrl?: string
}

export type IUpdateSolutionDTO = Partial<ICreateSolutionDTO>

// post comment
export type IReqComment = {
  text: string
  rating: number
}

// solution data
export type IResSolutionsDTO = ICreateSolutionDTO & {
  solutionId: ID
}

export type IResSolutionDTO = ICreateSolutionDTO & {
  solutionId: ID
  comments: {
    OwnerUid: IResUserDTO
    text: string
    rating: number
    createdAt: number
  }[]
}
