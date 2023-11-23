import { TAllowLevel } from '@src/config'

export type ISolutionIdParam = { solutionId: string }

export type IComment = {
  OwnerUid: string
  text: string
  rating: number
  createdAt: Date
}
export type ISolutionModel = ISolutionData & {
  solutionId: string
  comments: IComment[]
}

export type ISolutionData = {
  name: string
  type: string
  muscle: string
  items?: string[]
  level: TAllowLevel
  solutions: string[]
  pictures: string[]
  videoUrl?: string
}
