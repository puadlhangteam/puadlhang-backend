import { TAllowLevel } from '../config'
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

export type ISpecialistApplicationDTO = IReqSpecialistFormDTO & {
  uid: ID
  formId: ID
}

// user data
export type IUserDTO = {
  username: string
  uid: ID
  email: string
  picture?: string
  gender?: 'male' | 'female'
  age?: number
  isSpecialist?: boolean
}

// update user data
export type IReqUpdateUserDTO = Partial<IUserDTO>

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
    OwnerUid: IUserDTO
    text: string
    rating: number
    createdAt: number
  }[]
}
