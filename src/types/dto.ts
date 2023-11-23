// user request a specialist status
export type IReqSpecialistFormDTO = {
  certificate: string
  description?: string
}
// admin approve user specialist form
export type IReqSpecialistApprovedDTO = {
  formId: string
}

export type ISpecialistApplication = {}

// user data
export type IUserDTO = {
  username: string
  uid: string
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
  level: string
  solutions: string[]
  pictures: string[]
  videoUrl?: string
}

// solution data
export type IResSolutionDTO = ICreateSolutionDTO & {
  solutionId: string
  comments: {
    OwnerUid: IUserDTO
    text: string
    rating: number
    createdAt: Date
  }[]
}
